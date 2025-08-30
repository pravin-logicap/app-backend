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
exports.PresignDto = exports.CreateVendorPaymentDto = exports.CreateAdvanceSettleDto = exports.CreateAdvanceIssueDto = exports.CreateSalaryDto = void 0;
const openapi = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateSalaryDto {
    employeeId;
    amountInMinor;
    method;
    branchId;
    departmentId;
    referenceNo;
    note;
    assetIds;
    date;
    static _OPENAPI_METADATA_FACTORY() {
        return { employeeId: { required: true, type: () => String }, amountInMinor: { required: true, type: () => Number }, method: { required: true, type: () => String, enum: ['CASH', 'UPI_PHONEPE', 'UPI_GPAY', 'UPI_OTHER', 'BANK_TRANSFER', 'CHEQUE', 'OTHER'] }, branchId: { required: false, type: () => String }, departmentId: { required: false, type: () => String }, referenceNo: { required: false, type: () => String }, note: { required: false, type: () => String }, assetIds: { required: false, type: () => [String] }, date: { required: false, type: () => String } };
    }
}
exports.CreateSalaryDto = CreateSalaryDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateSalaryDto.prototype, "employeeId", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateSalaryDto.prototype, "amountInMinor", void 0);
__decorate([
    (0, class_validator_1.IsIn)(['CASH', 'UPI_PHONEPE', 'UPI_GPAY', 'UPI_OTHER', 'BANK_TRANSFER', 'CHEQUE', 'OTHER']),
    __metadata("design:type", String)
], CreateSalaryDto.prototype, "method", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateSalaryDto.prototype, "branchId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateSalaryDto.prototype, "departmentId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateSalaryDto.prototype, "referenceNo", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateSalaryDto.prototype, "note", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], CreateSalaryDto.prototype, "assetIds", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsISO8601)(),
    __metadata("design:type", String)
], CreateSalaryDto.prototype, "date", void 0);
class CreateAdvanceIssueDto {
    employeeId;
    amountInMinor;
    method;
    referenceNo;
    note;
    assetIds;
    date;
    static _OPENAPI_METADATA_FACTORY() {
        return { employeeId: { required: true, type: () => String }, amountInMinor: { required: true, type: () => Number }, method: { required: true, type: () => String, enum: ['CASH', 'UPI_PHONEPE', 'UPI_GPAY', 'UPI_OTHER', 'BANK_TRANSFER', 'CHEQUE', 'OTHER'] }, referenceNo: { required: false, type: () => String }, note: { required: false, type: () => String }, assetIds: { required: false, type: () => [String] }, date: { required: false, type: () => String } };
    }
}
exports.CreateAdvanceIssueDto = CreateAdvanceIssueDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateAdvanceIssueDto.prototype, "employeeId", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateAdvanceIssueDto.prototype, "amountInMinor", void 0);
__decorate([
    (0, class_validator_1.IsIn)(['CASH', 'UPI_PHONEPE', 'UPI_GPAY', 'UPI_OTHER', 'BANK_TRANSFER', 'CHEQUE', 'OTHER']),
    __metadata("design:type", String)
], CreateAdvanceIssueDto.prototype, "method", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateAdvanceIssueDto.prototype, "referenceNo", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateAdvanceIssueDto.prototype, "note", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], CreateAdvanceIssueDto.prototype, "assetIds", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsISO8601)(),
    __metadata("design:type", String)
], CreateAdvanceIssueDto.prototype, "date", void 0);
class CreateAdvanceSettleDto extends CreateAdvanceIssueDto {
    settleAgainstTxnId;
    static _OPENAPI_METADATA_FACTORY() {
        return { settleAgainstTxnId: { required: false, type: () => String } };
    }
}
exports.CreateAdvanceSettleDto = CreateAdvanceSettleDto;
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateAdvanceSettleDto.prototype, "settleAgainstTxnId", void 0);
class CreateVendorPaymentDto {
    vendorId;
    amountInMinor;
    method;
    branchId;
    departmentId;
    referenceNo;
    note;
    assetIds;
    date;
    static _OPENAPI_METADATA_FACTORY() {
        return { vendorId: { required: true, type: () => String }, amountInMinor: { required: true, type: () => Number }, method: { required: true, type: () => String, enum: ['CASH', 'UPI_PHONEPE', 'UPI_GPAY', 'UPI_OTHER', 'BANK_TRANSFER', 'CHEQUE', 'OTHER'] }, branchId: { required: false, type: () => String }, departmentId: { required: false, type: () => String }, referenceNo: { required: false, type: () => String }, note: { required: false, type: () => String }, assetIds: { required: false, type: () => [String] }, date: { required: false, type: () => String } };
    }
}
exports.CreateVendorPaymentDto = CreateVendorPaymentDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateVendorPaymentDto.prototype, "vendorId", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateVendorPaymentDto.prototype, "amountInMinor", void 0);
__decorate([
    (0, class_validator_1.IsIn)(['CASH', 'UPI_PHONEPE', 'UPI_GPAY', 'UPI_OTHER', 'BANK_TRANSFER', 'CHEQUE', 'OTHER']),
    __metadata("design:type", String)
], CreateVendorPaymentDto.prototype, "method", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateVendorPaymentDto.prototype, "branchId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateVendorPaymentDto.prototype, "departmentId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateVendorPaymentDto.prototype, "referenceNo", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateVendorPaymentDto.prototype, "note", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], CreateVendorPaymentDto.prototype, "assetIds", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsISO8601)(),
    __metadata("design:type", String)
], CreateVendorPaymentDto.prototype, "date", void 0);
class PresignDto {
    contentType;
    keyHint;
    static _OPENAPI_METADATA_FACTORY() {
        return { contentType: { required: true, type: () => String }, keyHint: { required: false, type: () => String } };
    }
}
exports.PresignDto = PresignDto;
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], PresignDto.prototype, "contentType", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], PresignDto.prototype, "keyHint", void 0);
//# sourceMappingURL=transactions.dto.js.map