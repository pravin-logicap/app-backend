"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const transaction_schema_1 = require("./schemas/transaction.schema");
let TransactionsService = class TransactionsService {
    model;
    constructor(model) {
        this.model = model;
    }
    async createTx(data) {
        const doc = new this.model({ ...data, date: data.date ?? new Date(), currency: data.currency ?? 'INR' });
        return doc.save();
    }
    async createSalary(input) {
        return this.createTx({
            txnType: 'SALARY',
            employeeId: new mongoose_2.Types.ObjectId(input.employeeId),
            amountInMinor: input.amountInMinor,
            method: input.method,
            branchId: input.branchId ? new mongoose_2.Types.ObjectId(input.branchId) : null,
            departmentId: input.departmentId ? new mongoose_2.Types.ObjectId(input.departmentId) : null,
            referenceNo: input.referenceNo,
            note: input.note,
            assets: (input.assetIds ?? []).map((id) => new mongoose_2.Types.ObjectId(id)),
            date: input.date,
        });
    }
    async createAdvanceIssue(input) {
        return this.createTx({
            txnType: 'ADVANCE_ISSUE',
            employeeId: new mongoose_2.Types.ObjectId(input.employeeId),
            amountInMinor: input.amountInMinor,
            method: input.method,
            referenceNo: input.referenceNo,
            note: input.note,
            assets: (input.assetIds ?? []).map((id) => new mongoose_2.Types.ObjectId(id)),
            date: input.date,
            advance: { isAdvance: true },
        });
    }
    async createAdvanceSettle(input) {
        return this.createTx({
            txnType: 'ADVANCE_SETTLE',
            employeeId: new mongoose_2.Types.ObjectId(input.employeeId),
            amountInMinor: input.amountInMinor,
            method: input.method,
            referenceNo: input.referenceNo,
            note: input.note,
            assets: (input.assetIds ?? []).map((id) => new mongoose_2.Types.ObjectId(id)),
            date: input.date,
            advance: { isAdvance: true, settleAgainstTxnId: input.settleAgainstTxnId ? new mongoose_2.Types.ObjectId(input.settleAgainstTxnId) : null },
        });
    }
    async createVendorPayment(input) {
        return this.createTx({
            txnType: 'VENDOR_PAYMENT',
            vendorId: new mongoose_2.Types.ObjectId(input.vendorId),
            amountInMinor: input.amountInMinor,
            method: input.method,
            branchId: input.branchId ? new mongoose_2.Types.ObjectId(input.branchId) : null,
            departmentId: input.departmentId ? new mongoose_2.Types.ObjectId(input.departmentId) : null,
            referenceNo: input.referenceNo,
            note: input.note,
            assets: (input.assetIds ?? []).map((id) => new mongoose_2.Types.ObjectId(id)),
            date: input.date,
        });
    }
    async listByEmployee(employeeId, q) {
        const filter = { employeeId: new mongoose_2.Types.ObjectId(employeeId) };
        if (q.from || q.to) {
            filter.date = {};
            if (q.from)
                filter.date.$gte = new Date(q.from);
            if (q.to)
                filter.date.$lte = new Date(q.to);
        }
        const limit = Math.min(Number(q.limit ?? 20), 100);
        const offset = Number(q.offset ?? 0);
        const [items, total] = await Promise.all([
            this.model.find(filter).sort({ date: -1 }).skip(offset).limit(limit).exec(),
            this.model.countDocuments(filter).exec(),
        ]);
        return { items, total, limit, offset };
    }
    async listByVendor(vendorId, q) {
        const filter = { vendorId: new mongoose_2.Types.ObjectId(vendorId) };
        if (q.from || q.to) {
            filter.date = {};
            if (q.from)
                filter.date.$gte = new Date(q.from);
            if (q.to)
                filter.date.$lte = new Date(q.to);
        }
        const limit = Math.min(Number(q.limit ?? 20), 100);
        const offset = Number(q.offset ?? 0);
        const [items, total] = await Promise.all([
            this.model.find(filter).sort({ date: -1 }).skip(offset).limit(limit).exec(),
            this.model.countDocuments(filter).exec(),
        ]);
        return { items, total, limit, offset };
    }
    async employeeBalance(employeeId) {
        const id = new mongoose_2.Types.ObjectId(employeeId);
        const rows = await this.model.aggregate([
            { $match: { employeeId: id } },
            { $group: {
                    _id: '$txnType',
                    amount: { $sum: '$amountInMinor' },
                } },
        ]).exec();
        const map = new Map();
        rows.forEach(r => map.set(r._id, r.amount));
        const advanceIssued = map.get('ADVANCE_ISSUE') ?? 0;
        const advanceSettled = map.get('ADVANCE_SETTLE') ?? 0;
        const salaryPaid = map.get('SALARY') ?? 0;
        const netAdvance = advanceIssued - advanceSettled;
        return { advanceIssued, advanceSettled, salaryPaid, netAdvance };
    }
    async vendorTotalPaid(vendorId) {
        const id = new mongoose_2.Types.ObjectId(vendorId);
        const rows = await this.model.aggregate([
            { $match: { vendorId: id, txnType: 'VENDOR_PAYMENT' } },
            { $group: { _id: null, amount: { $sum: '$amountInMinor' } } },
        ]).exec();
        return { totalPaid: rows[0]?.amount ?? 0 };
    }
};
exports.TransactionsService = TransactionsService;
exports.TransactionsService = TransactionsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(transaction_schema_1.Transaction.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], TransactionsService);
//# sourceMappingURL=transactions.service.js.map