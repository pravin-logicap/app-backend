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
Object.defineProperty(exports, "__esModule", { value: true });
exports.PayrollProfileSchema = exports.PayrollProfile = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let PayrollProfile = class PayrollProfile extends mongoose_2.Document {
    employeeId;
    baseSalaryInMinor;
    cycle;
    payDay;
    overtimeRatePerHourInMinor;
    allowances;
    deductions;
};
exports.PayrollProfile = PayrollProfile;
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.Types.ObjectId, ref: 'Employee', unique: true, index: true }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], PayrollProfile.prototype, "employeeId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Number, default: 0 }),
    __metadata("design:type", Number)
], PayrollProfile.prototype, "baseSalaryInMinor", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: 'MONTHLY' }),
    __metadata("design:type", String)
], PayrollProfile.prototype, "cycle", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Number, default: 1 }),
    __metadata("design:type", Number)
], PayrollProfile.prototype, "payDay", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Number }),
    __metadata("design:type", Number)
], PayrollProfile.prototype, "overtimeRatePerHourInMinor", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [{ name: String, amountInMinor: Number }], default: [] }),
    __metadata("design:type", Array)
], PayrollProfile.prototype, "allowances", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [{ name: String, amountInMinor: Number }], default: [] }),
    __metadata("design:type", Array)
], PayrollProfile.prototype, "deductions", void 0);
exports.PayrollProfile = PayrollProfile = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true })
], PayrollProfile);
exports.PayrollProfileSchema = mongoose_1.SchemaFactory.createForClass(PayrollProfile);
//# sourceMappingURL=payroll-profile.schema.js.map