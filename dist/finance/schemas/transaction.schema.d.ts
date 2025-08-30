import { Document, Types } from 'mongoose';
export declare class Transaction extends Document {
    date: Date;
    txnType: 'SALARY' | 'ADVANCE_ISSUE' | 'ADVANCE_SETTLE' | 'VENDOR_PAYMENT' | 'REIMBURSEMENT' | 'ADJUSTMENT';
    method: 'CASH' | 'UPI_PHONEPE' | 'UPI_GPAY' | 'UPI_OTHER' | 'BANK_TRANSFER' | 'CHEQUE' | 'OTHER';
    amountInMinor: number;
    currency: string;
    employeeId?: Types.ObjectId | null;
    vendorId?: Types.ObjectId | null;
    branchId?: Types.ObjectId | null;
    departmentId?: Types.ObjectId | null;
    note?: string;
    referenceNo?: string;
    assets: Types.ObjectId[];
    tags: string[];
    advance?: {
        isAdvance?: boolean;
        settleAgainstTxnId?: Types.ObjectId | null;
    };
    createdBy?: Types.ObjectId;
}
export declare const TransactionSchema: import("mongoose").Schema<Transaction, import("mongoose").Model<Transaction, any, any, any, Document<unknown, any, Transaction, any, {}> & Transaction & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Transaction, Document<unknown, {}, import("mongoose").FlatRecord<Transaction>, {}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & import("mongoose").FlatRecord<Transaction> & Required<{
    _id: unknown;
}> & {
    __v: number;
}>;
