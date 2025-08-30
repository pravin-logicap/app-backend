import { TransactionsService } from './transactions.service';
import { CreateAdvanceIssueDto, CreateAdvanceSettleDto, CreateSalaryDto, CreateVendorPaymentDto } from './dto/transactions.dto';
import { DateRangeDto } from './dto/common.dto';
export declare class TransactionsController {
    private readonly service;
    constructor(service: TransactionsService);
    salary(body: CreateSalaryDto): Promise<import("mongoose").Document<unknown, {}, import("./schemas/transaction.schema").Transaction, {}, {}> & import("./schemas/transaction.schema").Transaction & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    advanceIssue(body: CreateAdvanceIssueDto): Promise<import("mongoose").Document<unknown, {}, import("./schemas/transaction.schema").Transaction, {}, {}> & import("./schemas/transaction.schema").Transaction & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    advanceSettle(body: CreateAdvanceSettleDto): Promise<import("mongoose").Document<unknown, {}, import("./schemas/transaction.schema").Transaction, {}, {}> & import("./schemas/transaction.schema").Transaction & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    vendorPayment(body: CreateVendorPaymentDto): Promise<import("mongoose").Document<unknown, {}, import("./schemas/transaction.schema").Transaction, {}, {}> & import("./schemas/transaction.schema").Transaction & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    listByEmployee(employeeId: string, q: DateRangeDto): Promise<{
        items: (import("mongoose").Document<unknown, {}, import("./schemas/transaction.schema").Transaction, {}, {}> & import("./schemas/transaction.schema").Transaction & Required<{
            _id: unknown;
        }> & {
            __v: number;
        })[];
        total: number;
        limit: number;
        offset: number;
    }>;
    listByVendor(vendorId: string, q: DateRangeDto): Promise<{
        items: (import("mongoose").Document<unknown, {}, import("./schemas/transaction.schema").Transaction, {}, {}> & import("./schemas/transaction.schema").Transaction & Required<{
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
    vendorTotal(vendorId: string): Promise<{
        totalPaid: any;
    }>;
}
