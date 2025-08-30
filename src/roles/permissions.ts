export const PERMISSIONS_GROUPED = {
  departments: ['department:create', 'department:update', 'department:delete'],
  branches: ['branch:create', 'branch:update', 'branch:delete'],
  vendors: ['vendor:create', 'vendor:update', 'vendor:delete'],
  employees: ['employee:create', 'employee:update', 'employee:delete', 'employee:move'],
  payroll: ['payroll:upsert'],
  transactions: ['txn:salary', 'txn:advance', 'txn:vendor'],
  assets: ['asset:create', 'asset:link', 'asset:presign'],
} as const;

export const ALL_PERMISSIONS: readonly string[] = Object.freeze(
  Object.values(PERMISSIONS_GROUPED).flat(),
); 