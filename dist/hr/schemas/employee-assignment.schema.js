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
exports.EmployeeAssignmentSchema = exports.EmployeeAssignment = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let EmployeeAssignment = class EmployeeAssignment extends mongoose_2.Document {
    employeeId;
    departmentId;
    branchId;
    vendorId;
    effectiveFrom;
    effectiveTo;
    status;
    note;
};
exports.EmployeeAssignment = EmployeeAssignment;
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.Types.ObjectId, ref: 'Employee', index: true }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], EmployeeAssignment.prototype, "employeeId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.Types.ObjectId, ref: 'Department', index: true }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], EmployeeAssignment.prototype, "departmentId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.Types.ObjectId, ref: 'Branch', index: true }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], EmployeeAssignment.prototype, "branchId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.Types.ObjectId, ref: 'Vendor', index: true, default: null }),
    __metadata("design:type", Object)
], EmployeeAssignment.prototype, "vendorId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Date, index: true }),
    __metadata("design:type", Date)
], EmployeeAssignment.prototype, "effectiveFrom", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Date, index: true, default: null }),
    __metadata("design:type", Object)
], EmployeeAssignment.prototype, "effectiveTo", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: 'ACTIVE', index: true }),
    __metadata("design:type", String)
], EmployeeAssignment.prototype, "status", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], EmployeeAssignment.prototype, "note", void 0);
exports.EmployeeAssignment = EmployeeAssignment = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true })
], EmployeeAssignment);
exports.EmployeeAssignmentSchema = mongoose_1.SchemaFactory.createForClass(EmployeeAssignment);
exports.EmployeeAssignmentSchema.index({ employeeId: 1, effectiveFrom: -1 });
exports.EmployeeAssignmentSchema.index({ employeeId: 1, status: 1 });
//# sourceMappingURL=employee-assignment.schema.js.map