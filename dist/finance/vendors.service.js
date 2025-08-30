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
exports.VendorsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const vendor_schema_1 = require("./schemas/vendor.schema");
let VendorsService = class VendorsService {
    model;
    constructor(model) {
        this.model = model;
    }
    async create(data) {
        const doc = new this.model(data);
        return doc.save();
    }
    async findAll(query) {
        const filter = {};
        if (query.q)
            filter.name = { $regex: query.q, $options: 'i' };
        const limit = Math.min(Number(query.limit ?? 20), 100);
        const offset = Number(query.offset ?? 0);
        const [items, total] = await Promise.all([
            this.model.find(filter).skip(offset).limit(limit).sort({ createdAt: -1 }).exec(),
            this.model.countDocuments(filter).exec(),
        ]);
        return { items, total, limit, offset };
    }
    async findById(id) {
        const doc = await this.model.findById(id).exec();
        if (!doc)
            throw new common_1.NotFoundException('Vendor not found');
        return doc;
    }
    async update(id, data) {
        const doc = await this.model.findByIdAndUpdate(id, data, { new: true }).exec();
        if (!doc)
            throw new common_1.NotFoundException('Vendor not found');
        return doc;
    }
    async remove(id) {
        await this.model.findByIdAndDelete(id).exec();
        return { deleted: true };
    }
};
exports.VendorsService = VendorsService;
exports.VendorsService = VendorsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(vendor_schema_1.Vendor.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], VendorsService);
//# sourceMappingURL=vendors.service.js.map