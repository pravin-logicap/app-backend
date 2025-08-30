"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ALL_PERMISSIONS = exports.PERMISSIONS_GROUPED = void 0;
exports.PERMISSIONS_GROUPED = {
    departments: ['department:create', 'department:update', 'department:delete'],
    branches: ['branch:create', 'branch:update', 'branch:delete'],
    vendors: ['vendor:create', 'vendor:update', 'vendor:delete'],
    employees: ['employee:create', 'employee:update', 'employee:delete', 'employee:move'],
    payroll: ['payroll:upsert'],
    transactions: ['txn:salary', 'txn:advance', 'txn:vendor'],
    assets: ['asset:create', 'asset:link', 'asset:presign'],
};
exports.ALL_PERMISSIONS = Object.freeze(Object.values(exports.PERMISSIONS_GROUPED).flat());
//# sourceMappingURL=permissions.js.map