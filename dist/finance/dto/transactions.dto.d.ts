export declare class CreateSalaryDto {
    employeeId: string;
    amountInMinor: number;
    method: string;
    branchId?: string;
    departmentId?: string;
    referenceNo?: string;
    note?: string;
    assetIds?: string[];
    date?: string;
}
export declare class CreateAdvanceIssueDto {
    employeeId: string;
    amountInMinor: number;
    method: string;
    referenceNo?: string;
    note?: string;
    assetIds?: string[];
    date?: string;
}
export declare class CreateAdvanceSettleDto extends CreateAdvanceIssueDto {
    settleAgainstTxnId?: string;
}
export declare class CreateVendorPaymentDto {
    vendorId: string;
    amountInMinor: number;
    method: string;
    branchId?: string;
    departmentId?: string;
    referenceNo?: string;
    note?: string;
    assetIds?: string[];
    date?: string;
}
export declare class PresignDto {
    contentType: string;
    keyHint?: string;
}
