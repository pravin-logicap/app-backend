export declare const PERMISSIONS_GROUPED: {
    readonly departments: readonly ["department:create", "department:update", "department:delete"];
    readonly branches: readonly ["branch:create", "branch:update", "branch:delete"];
    readonly vendors: readonly ["vendor:create", "vendor:update", "vendor:delete"];
    readonly employees: readonly ["employee:create", "employee:update", "employee:delete", "employee:move"];
    readonly payroll: readonly ["payroll:upsert"];
    readonly transactions: readonly ["txn:salary", "txn:advance", "txn:vendor"];
    readonly assets: readonly ["asset:create", "asset:link", "asset:presign"];
};
export declare const ALL_PERMISSIONS: readonly string[];
