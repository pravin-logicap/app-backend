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
exports.AssignmentsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const employee_assignment_schema_1 = require("./schemas/employee-assignment.schema");
let AssignmentsService = class AssignmentsService {
    model;
    constructor(model) {
        this.model = model;
    }
    async create(data) {
        const doc = new this.model({
            employeeId: new mongoose_2.Types.ObjectId(data.employeeId),
            departmentId: new mongoose_2.Types.ObjectId(data.departmentId),
            branchId: new mongoose_2.Types.ObjectId(data.branchId),
            vendorId: data.vendorId ? new mongoose_2.Types.ObjectId(data.vendorId) : null,
            effectiveFrom: data.effectiveFrom ?? new Date(),
            status: 'ACTIVE',
            note: data.note,
        });
        return doc.save();
    }
    async endAssignment(id, effectiveTo) {
        const doc = await this.model
            .findByIdAndUpdate(id, { status: 'ENDED', effectiveTo: effectiveTo ?? new Date() }, { new: true })
            .exec();
        if (!doc)
            throw new common_1.NotFoundException('Assignment not found');
        return doc;
    }
    async listByEmployee(employeeId, onlyActive = false) {
        const filter = { employeeId: new mongoose_2.Types.ObjectId(employeeId) };
        if (onlyActive)
            filter.status = 'ACTIVE';
        return this.model.find(filter).sort({ effectiveFrom: -1 }).exec();
    }
    async currentForEmployee(employeeId) {
        const doc = await this.model
            .findOne({ employeeId: new mongoose_2.Types.ObjectId(employeeId), status: 'ACTIVE' })
            .sort({ effectiveFrom: -1 })
            .exec();
        if (!doc)
            throw new common_1.NotFoundException('No active assignment');
        return doc;
    }
    async moveEmployee(data) {
        const current = await this.model
            .findOne({ employeeId: new mongoose_2.Types.ObjectId(data.employeeId), status: 'ACTIVE' })
            .exec();
        if (current) {
            await this.endAssignment(current._id.toString(), new Date());
        }
        return this.create(data);
    }
};
exports.AssignmentsService = AssignmentsService;
exports.AssignmentsService = AssignmentsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(employee_assignment_schema_1.EmployeeAssignment.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], AssignmentsService);
//# sourceMappingURL=assignments.service.js.map