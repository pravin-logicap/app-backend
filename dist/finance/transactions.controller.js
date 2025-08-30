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
exports.TransactionsController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const transactions_service_1 = require("./transactions.service");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
const roles_guard_1 = require("../roles/roles.guard");
const roles_decorator_1 = require("../roles/roles.decorator");
const transactions_dto_1 = require("./dto/transactions.dto");
const swagger_1 = require("@nestjs/swagger");
const common_dto_1 = require("./dto/common.dto");
let TransactionsController = class TransactionsController {
    service;
    constructor(service) {
        this.service = service;
    }
    async salary(body) {
        const { method, ...rest } = body;
        return this.service.createSalary({ ...rest, method: method, date: body.date ? new Date(body.date) : undefined });
    }
    async advanceIssue(body) {
        const { method, ...rest } = body;
        return this.service.createAdvanceIssue({ ...rest, method: method, date: body.date ? new Date(body.date) : undefined });
    }
    async advanceSettle(body) {
        const { method, ...rest } = body;
        return this.service.createAdvanceSettle({ ...rest, method: method, date: body.date ? new Date(body.date) : undefined });
    }
    async vendorPayment(body) {
        const { method, ...rest } = body;
        return this.service.createVendorPayment({ ...rest, method: method, date: body.date ? new Date(body.date) : undefined });
    }
    async listByEmployee(employeeId, q) {
        return this.service.listByEmployee(employeeId, q);
    }
    async listByVendor(vendorId, q) {
        return this.service.listByVendor(vendorId, q);
    }
    async employeeBalance(employeeId) {
        return this.service.employeeBalance(employeeId);
    }
    async vendorTotal(vendorId) {
        return this.service.vendorTotalPaid(vendorId);
    }
};
exports.TransactionsController = TransactionsController;
__decorate([
    (0, common_1.Post)('salary'),
    (0, swagger_1.ApiOperation)({ summary: 'Create salary payment for an employee' }),
    (0, swagger_1.ApiBody)({ type: transactions_dto_1.CreateSalaryDto }),
    (0, roles_decorator_1.Permissions)('txn:salary'),
    openapi.ApiResponse({ status: 201, type: Object }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [transactions_dto_1.CreateSalaryDto]),
    __metadata("design:returntype", Promise)
], TransactionsController.prototype, "salary", null);
__decorate([
    (0, common_1.Post)('advance-issue'),
    (0, swagger_1.ApiOperation)({ summary: 'Issue advance to an employee' }),
    (0, swagger_1.ApiBody)({ type: transactions_dto_1.CreateAdvanceIssueDto }),
    (0, roles_decorator_1.Permissions)('txn:advance'),
    openapi.ApiResponse({ status: 201, type: Object }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [transactions_dto_1.CreateAdvanceIssueDto]),
    __metadata("design:returntype", Promise)
], TransactionsController.prototype, "advanceIssue", null);
__decorate([
    (0, common_1.Post)('advance-settle'),
    (0, swagger_1.ApiOperation)({ summary: 'Settle employee advance (reduce balance)' }),
    (0, swagger_1.ApiBody)({ type: transactions_dto_1.CreateAdvanceSettleDto }),
    (0, roles_decorator_1.Permissions)('txn:advance'),
    openapi.ApiResponse({ status: 201, type: Object }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [transactions_dto_1.CreateAdvanceSettleDto]),
    __metadata("design:returntype", Promise)
], TransactionsController.prototype, "advanceSettle", null);
__decorate([
    (0, common_1.Post)('vendor-payment'),
    (0, swagger_1.ApiOperation)({ summary: 'Pay a vendor' }),
    (0, swagger_1.ApiBody)({ type: transactions_dto_1.CreateVendorPaymentDto }),
    (0, roles_decorator_1.Permissions)('txn:vendor'),
    openapi.ApiResponse({ status: 201, type: Object }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [transactions_dto_1.CreateVendorPaymentDto]),
    __metadata("design:returntype", Promise)
], TransactionsController.prototype, "vendorPayment", null);
__decorate([
    (0, common_1.Get)('by-employee/:employeeId'),
    (0, swagger_1.ApiOperation)({ summary: 'List transactions by employee' }),
    (0, swagger_1.ApiParam)({ name: 'employeeId', type: String }),
    (0, swagger_1.ApiQuery)({ name: 'from', required: false }),
    (0, swagger_1.ApiQuery)({ name: 'to', required: false }),
    (0, swagger_1.ApiQuery)({ name: 'limit', required: false }),
    (0, swagger_1.ApiQuery)({ name: 'offset', required: false }),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('employeeId')),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, common_dto_1.DateRangeDto]),
    __metadata("design:returntype", Promise)
], TransactionsController.prototype, "listByEmployee", null);
__decorate([
    (0, common_1.Get)('by-vendor/:vendorId'),
    (0, swagger_1.ApiOperation)({ summary: 'List transactions by vendor' }),
    (0, swagger_1.ApiParam)({ name: 'vendorId', type: String }),
    (0, swagger_1.ApiQuery)({ name: 'from', required: false }),
    (0, swagger_1.ApiQuery)({ name: 'to', required: false }),
    (0, swagger_1.ApiQuery)({ name: 'limit', required: false }),
    (0, swagger_1.ApiQuery)({ name: 'offset', required: false }),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('vendorId')),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, common_dto_1.DateRangeDto]),
    __metadata("design:returntype", Promise)
], TransactionsController.prototype, "listByVendor", null);
__decorate([
    (0, common_1.Get)('employee-balance/:employeeId'),
    (0, swagger_1.ApiOperation)({ summary: 'Get employee advance/salary balance summary' }),
    (0, swagger_1.ApiParam)({ name: 'employeeId', type: String }),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('employeeId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TransactionsController.prototype, "employeeBalance", null);
__decorate([
    (0, common_1.Get)('vendor-total/:vendorId'),
    (0, swagger_1.ApiOperation)({ summary: 'Get vendor total paid' }),
    (0, swagger_1.ApiParam)({ name: 'vendorId', type: String }),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('vendorId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TransactionsController.prototype, "vendorTotal", null);
exports.TransactionsController = TransactionsController = __decorate([
    (0, swagger_1.ApiTags)('Transactions'),
    (0, swagger_1.ApiBearerAuth)('JWT'),
    (0, common_1.Controller)('transactions'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    __metadata("design:paramtypes", [transactions_service_1.TransactionsService])
], TransactionsController);
//# sourceMappingURL=transactions.controller.js.map