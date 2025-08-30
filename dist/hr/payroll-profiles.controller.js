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
exports.PayrollProfilesController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const payroll_profiles_service_1 = require("./payroll-profiles.service");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
const roles_guard_1 = require("../roles/roles.guard");
const roles_decorator_1 = require("../roles/roles.decorator");
let PayrollProfilesController = class PayrollProfilesController {
    service;
    constructor(service) {
        this.service = service;
    }
    async get(employeeId) {
        return this.service.get(employeeId);
    }
    async upsert(employeeId, body) {
        return this.service.upsert(employeeId, body);
    }
};
exports.PayrollProfilesController = PayrollProfilesController;
__decorate([
    (0, common_1.Get)(':employeeId'),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)('employeeId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PayrollProfilesController.prototype, "get", null);
__decorate([
    (0, common_1.Put)(':employeeId'),
    (0, roles_decorator_1.Permissions)('payroll:upsert'),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)('employeeId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], PayrollProfilesController.prototype, "upsert", null);
exports.PayrollProfilesController = PayrollProfilesController = __decorate([
    (0, common_1.Controller)('payroll-profiles'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    __metadata("design:paramtypes", [payroll_profiles_service_1.PayrollProfilesService])
], PayrollProfilesController);
//# sourceMappingURL=payroll-profiles.controller.js.map