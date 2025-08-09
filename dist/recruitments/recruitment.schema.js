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
exports.RecruitmentSchema = exports.Recruitment = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let Recruitment = class Recruitment extends mongoose_2.Document {
    title;
    department;
    status;
    applyUrl;
    publishedAt;
};
exports.Recruitment = Recruitment;
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Recruitment.prototype, "title", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Recruitment.prototype, "department", void 0);
__decorate([
    (0, mongoose_1.Prop)({ enum: ['OPEN', 'CLOSED', 'UPCOMING'], default: 'OPEN' }),
    __metadata("design:type", String)
], Recruitment.prototype, "status", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Recruitment.prototype, "applyUrl", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Date)
], Recruitment.prototype, "publishedAt", void 0);
exports.Recruitment = Recruitment = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true })
], Recruitment);
exports.RecruitmentSchema = mongoose_1.SchemaFactory.createForClass(Recruitment);
//# sourceMappingURL=recruitment.schema.js.map