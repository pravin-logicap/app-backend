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
exports.PayrollProfilesService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const payroll_profile_schema_1 = require("./schemas/payroll-profile.schema");
let PayrollProfilesService = class PayrollProfilesService {
    model;
    constructor(model) {
        this.model = model;
    }
    async upsert(employeeId, data) {
        const doc = await this.model.findOneAndUpdate({ employeeId }, { $set: data, employeeId }, { new: true, upsert: true }).exec();
        return doc;
    }
    async get(employeeId) {
        const doc = await this.model.findOne({ employeeId }).exec();
        if (!doc)
            throw new common_1.NotFoundException('Payroll profile not found');
        return doc;
    }
};
exports.PayrollProfilesService = PayrollProfilesService;
exports.PayrollProfilesService = PayrollProfilesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(payroll_profile_schema_1.PayrollProfile.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], PayrollProfilesService);
//# sourceMappingURL=payroll-profiles.service.js.map