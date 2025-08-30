import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FilterQuery, Model, Types } from 'mongoose';
import { Transaction } from './schemas/transaction.schema';

type TxnMethod = 'CASH'|'UPI_PHONEPE'|'UPI_GPAY'|'UPI_OTHER'|'BANK_TRANSFER'|'CHEQUE'|'OTHER';

@Injectable()
export class TransactionsService {
  constructor(@InjectModel(Transaction.name) private readonly model: Model<Transaction>) {}

  private async createTx(data: Partial<Transaction>) {
    const doc = new this.model({ ...data, date: data.date ?? new Date(), currency: data.currency ?? 'INR' });
    return doc.save();
  }

  async createSalary(input: {
    employeeId: string;
    amountInMinor: number;
    method: TxnMethod;
    branchId?: string | null;
    departmentId?: string | null;
    referenceNo?: string;
    note?: string;
    assetIds?: string[];
    date?: Date;
  }) {
    return this.createTx({
      txnType: 'SALARY',
      employeeId: new Types.ObjectId(input.employeeId),
      amountInMinor: input.amountInMinor,
      method: input.method,
      branchId: input.branchId ? new Types.ObjectId(input.branchId) : null,
      departmentId: input.departmentId ? new Types.ObjectId(input.departmentId) : null,
      referenceNo: input.referenceNo,
      note: input.note,
      assets: (input.assetIds ?? []).map((id) => new Types.ObjectId(id)),
      date: input.date,
    });
  }

  async createAdvanceIssue(input: {
    employeeId: string;
    amountInMinor: number;
    method: TxnMethod;
    referenceNo?: string;
    note?: string;
    assetIds?: string[];
    date?: Date;
  }) {
    return this.createTx({
      txnType: 'ADVANCE_ISSUE',
      employeeId: new Types.ObjectId(input.employeeId),
      amountInMinor: input.amountInMinor,
      method: input.method,
      referenceNo: input.referenceNo,
      note: input.note,
      assets: (input.assetIds ?? []).map((id) => new Types.ObjectId(id)),
      date: input.date,
      advance: { isAdvance: true },
    });
  }

  async createAdvanceSettle(input: {
    employeeId: string;
    amountInMinor: number; // amount reducing the advance balance
    method: TxnMethod;
    referenceNo?: string;
    note?: string;
    settleAgainstTxnId?: string | null;
    assetIds?: string[];
    date?: Date;
  }) {
    return this.createTx({
      txnType: 'ADVANCE_SETTLE',
      employeeId: new Types.ObjectId(input.employeeId),
      amountInMinor: input.amountInMinor,
      method: input.method,
      referenceNo: input.referenceNo,
      note: input.note,
      assets: (input.assetIds ?? []).map((id) => new Types.ObjectId(id)),
      date: input.date,
      advance: { isAdvance: true, settleAgainstTxnId: input.settleAgainstTxnId ? new Types.ObjectId(input.settleAgainstTxnId) : null },
    });
  }

  async createVendorPayment(input: {
    vendorId: string;
    amountInMinor: number;
    method: TxnMethod;
    branchId?: string | null;
    departmentId?: string | null;
    referenceNo?: string;
    note?: string;
    assetIds?: string[];
    date?: Date;
  }) {
    return this.createTx({
      txnType: 'VENDOR_PAYMENT',
      vendorId: new Types.ObjectId(input.vendorId),
      amountInMinor: input.amountInMinor,
      method: input.method,
      branchId: input.branchId ? new Types.ObjectId(input.branchId) : null,
      departmentId: input.departmentId ? new Types.ObjectId(input.departmentId) : null,
      referenceNo: input.referenceNo,
      note: input.note,
      assets: (input.assetIds ?? []).map((id) => new Types.ObjectId(id)),
      date: input.date,
    });
  }

  async listByEmployee(employeeId: string, q: { from?: string; to?: string; limit?: number; offset?: number }) {
    const filter: FilterQuery<Transaction> = { employeeId: new Types.ObjectId(employeeId) };
    if (q.from || q.to) {
      filter.date = {} as any;
      if (q.from) (filter.date as any).$gte = new Date(q.from);
      if (q.to) (filter.date as any).$lte = new Date(q.to);
    }
    const limit = Math.min(Number(q.limit ?? 20), 100);
    const offset = Number(q.offset ?? 0);
    const [items, total] = await Promise.all([
      this.model.find(filter).sort({ date: -1 }).skip(offset).limit(limit).exec(),
      this.model.countDocuments(filter).exec(),
    ]);
    return { items, total, limit, offset };
  }

  async listByVendor(vendorId: string, q: { from?: string; to?: string; limit?: number; offset?: number }) {
    const filter: FilterQuery<Transaction> = { vendorId: new Types.ObjectId(vendorId) };
    if (q.from || q.to) {
      filter.date = {} as any;
      if (q.from) (filter.date as any).$gte = new Date(q.from);
      if (q.to) (filter.date as any).$lte = new Date(q.to);
    }
    const limit = Math.min(Number(q.limit ?? 20), 100);
    const offset = Number(q.offset ?? 0);
    const [items, total] = await Promise.all([
      this.model.find(filter).sort({ date: -1 }).skip(offset).limit(limit).exec(),
      this.model.countDocuments(filter).exec(),
    ]);
    return { items, total, limit, offset };
  }

  async employeeBalance(employeeId: string) {
    const id = new Types.ObjectId(employeeId);
    const rows = await this.model.aggregate([
      { $match: { employeeId: id } },
      { $group: {
        _id: '$txnType',
        amount: { $sum: '$amountInMinor' },
      }},
    ]).exec();
    const map = new Map<string, number>();
    rows.forEach(r => map.set(r._id, r.amount));
    const advanceIssued = map.get('ADVANCE_ISSUE') ?? 0;
    const advanceSettled = map.get('ADVANCE_SETTLE') ?? 0;
    const salaryPaid = map.get('SALARY') ?? 0;
    const netAdvance = advanceIssued - advanceSettled; // positive means employee owes org
    return { advanceIssued, advanceSettled, salaryPaid, netAdvance };
  }

  async vendorTotalPaid(vendorId: string) {
    const id = new Types.ObjectId(vendorId);
    const rows = await this.model.aggregate([
      { $match: { vendorId: id, txnType: 'VENDOR_PAYMENT' } },
      { $group: { _id: null, amount: { $sum: '$amountInMinor' } } },
    ]).exec();
    return { totalPaid: rows[0]?.amount ?? 0 };
  }
} 