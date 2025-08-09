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
exports.CreateRecruitmentDto = void 0;
const class_validator_1 = require("class-validator");
class CreateRecruitmentDto {
    title;
    department;
    status;
    applyUrl;
    publishedAt;
}
exports.CreateRecruitmentDto = CreateRecruitmentDto;
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'Title is required' }),
    __metadata("design:type", String)
], CreateRecruitmentDto.prototype, "title", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateRecruitmentDto.prototype, "department", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsIn)(['OPEN', 'CLOSED', 'UPCOMING'], { message: 'Status must be one of: OPEN, CLOSED, UPCOMING' }),
    __metadata("design:type", String)
], CreateRecruitmentDto.prototype, "status", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUrl)({}, { message: 'Apply URL must be a valid URL' }),
    __metadata("design:type", String)
], CreateRecruitmentDto.prototype, "applyUrl", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsISO8601)({}, { message: 'Published date must be a valid ISO date (YYYY-MM-DD)' }),
    __metadata("design:type", String)
], CreateRecruitmentDto.prototype, "publishedAt", void 0);
//# sourceMappingURL=create-recruitment.dto.js.map