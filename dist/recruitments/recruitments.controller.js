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
exports.RecruitmentsController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const recruitments_service_1 = require("./recruitments.service");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
const create_recruitment_dto_1 = require("./dto/create-recruitment.dto");
const roles_guard_1 = require("../roles/roles.guard");
const roles_decorator_1 = require("../roles/roles.decorator");
let RecruitmentsController = class RecruitmentsController {
    service;
    constructor(service) {
        this.service = service;
    }
    async list() {
        const items = await this.service.listAll();
        return items.map((r) => ({
            id: r.id,
            title: r.title,
            department: r.department,
            status: r.status,
            applyUrl: r.applyUrl,
            publishedAt: r.publishedAt,
        }));
    }
    async create(body) {
        const created = await this.service.create({
            title: body.title,
            department: body.department,
            status: body.status,
            applyUrl: body.applyUrl,
            publishedAt: body.publishedAt ? new Date(body.publishedAt) : undefined,
        });
        return { id: created.id };
    }
};
exports.RecruitmentsController = RecruitmentsController;
__decorate([
    (0, common_1.Get)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    openapi.ApiResponse({ status: 200 }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], RecruitmentsController.prototype, "list", null);
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Permissions)('recruitments:create'),
    openapi.ApiResponse({ status: 201 }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_recruitment_dto_1.CreateRecruitmentDto]),
    __metadata("design:returntype", Promise)
], RecruitmentsController.prototype, "create", null);
exports.RecruitmentsController = RecruitmentsController = __decorate([
    (0, common_1.Controller)('recruitments'),
    __metadata("design:paramtypes", [recruitments_service_1.RecruitmentsService])
], RecruitmentsController);
//# sourceMappingURL=recruitments.controller.js.map