import { Model } from 'mongoose';
import { Transaction } from './schemas/transaction.schema';
type TxnMethod = 'CASH' | 'UPI_PHONEPE' | 'UPI_GPAY' | 'UPI_OTHER' | 'BANK_TRANSFER' | 'CHEQUE' | 'OTHER';
export declare class TransactionsService {
    private readonly model;
    constructor(model: Model<Transaction>);
    private createTx;
    createSalary(input: {
        employeeId: string;
        amountInMinor: number;
        method: TxnMethod;
        branchId?: string | null;
        departmentId?: string | null;
        referenceNo?: string;
        note?: string;
        assetIds?: string[];
        date?: Date;
    }): Promise<import("mongoose").Document<unknown, {}, Transaction, {}, {}> & Transaction & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    createAdvanceIssue(input: {
        employeeId: string;
        amountInMinor: number;
        method: TxnMethod;
        referenceNo?: string;
        note?: string;
        assetIds?: string[];
        date?: Date;
    }): Promise<import("mongoose").Document<unknown, {}, Transaction, {}, {}> & Transaction & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    createAdvanceSettle(input: {
        employeeId: string;
        amountInMinor: number;
        method: TxnMethod;
        referenceNo?: string;
        note?: string;
        settleAgainstTxnId?: string | null;
        assetIds?: string[];
        date?: Date;
    }): Promise<import("mongoose").Document<unknown, {}, Transaction, {}, {}> & Transaction & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    createVendorPayment(input: {
        vendorId: string;
        amountInMinor: number;
        method: TxnMethod;
        branchId?: string | null;
        departmentId?: string | null;
        referenceNo?: string;
        note?: string;
        assetIds?: string[];
        date?: Date;
    }): Promise<import("mongoose").Document<unknown, {}, Transaction, {}, {}> & Transaction & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    listByEmployee(employeeId: string, q: {
        from?: string;
        to?: string;
        limit?: number;
        offset?: number;
    }): Promise<{
        items: (import("mongoose").Document<unknown, {}, Transaction, {}, {}> & Transaction & Required<{
            _id: unknown;
        }> & {
            __v: number;
        })[];
        total: number;
        limit: number;
        offset: number;
    }>;
    listByVendor(vendorId: string, q: {
        from?: string;
        to?: string;
        limit?: number;
        offset?: number;
    }): Promise<{
        items: (import("mongoose").Document<unknown, {}, Transaction, {}, {}> & Transaction & Required<{
            _id: unknown;
        }> & {
            __v: number;
        })[];
        total: number;
        limit: number;
        offset: number;
    }>;
    employeeBalance(employeeId: string): Promise<{
        advanceIssued: number;
        advanceSettled: number;
        salaryPaid: number;
        netAdvance: number;
    }>;
    vendorTotalPaid(vendorId: string): Promise<{
        totalPaid: any;
    }>;
}
export {};
