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
exports.RolesGuard = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const roles_decorator_1 = require("./roles.decorator");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const role_schema_1 = require("./role.schema");
let RolesGuard = class RolesGuard {
    reflector;
    roleModel;
    constructor(reflector, roleModel) {
        this.reflector = reflector;
        this.roleModel = roleModel;
    }
    async canActivate(context) {
        const required = this.reflector.getAllAndOverride(roles_decorator_1.PERMISSIONS_KEY, [
            context.getHandler(),
            context.getClass(),
        ]) || [];
        const req = context.switchToHttp().getRequest();
        const user = req.user;
        if (!user?.isAdmin)
            throw new common_1.ForbiddenException('Admin access required');
        if (required.length === 0)
            return true;
        if (!user.roleId)
            throw new common_1.ForbiddenException('No role assigned');
        const role = await this.roleModel.findOne({ roleId: user.roleId }).exec();
        if (!role || !role.isActive)
            throw new common_1.ForbiddenException('Role not active');
        const allowed = new Set(role.permissions);
        const ok = required.every((p) => allowed.has(p));
        if (!ok)
            throw new common_1.ForbiddenException('Insufficient role permissions');
        return true;
    }
};
exports.RolesGuard = RolesGuard;
exports.RolesGuard = RolesGuard = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, mongoose_1.InjectModel)(role_schema_1.Role.name)),
    __metadata("design:paramtypes", [core_1.Reflector, mongoose_2.Model])
], RolesGuard);
//# sourceMappingURL=roles.guard.js.map