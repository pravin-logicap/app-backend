"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecruitmentsModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const recruitment_schema_1 = require("./recruitment.schema");
const recruitments_controller_1 = require("./recruitments.controller");
const recruitments_service_1 = require("./recruitments.service");
const roles_module_1 = require("../roles/roles.module");
let RecruitmentsModule = class RecruitmentsModule {
};
exports.RecruitmentsModule = RecruitmentsModule;
exports.RecruitmentsModule = RecruitmentsModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: recruitment_schema_1.Recruitment.name, schema: recruitment_schema_1.RecruitmentSchema }]),
            roles_module_1.RolesModule,
        ],
        controllers: [recruitments_controller_1.RecruitmentsController],
        providers: [recruitments_service_1.RecruitmentsService],
    })
], RecruitmentsModule);
//# sourceMappingURL=recruitments.module.js.map