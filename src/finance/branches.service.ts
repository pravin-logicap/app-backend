import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, FilterQuery, Types } from 'mongoose';
import { Branch } from './schemas/branch.schema';

@Injectable()
export class BranchesService {
  constructor(@InjectModel(Branch.name) private readonly model: Model<Branch>) {}

  async create(data: Partial<Branch>) {
    const doc = new this.model(data);
    return doc.save();
  }

  async findAll(query: { q?: string; departmentId?: string; limit?: number; offset?: number }) {
    const filter: FilterQuery<Branch> = {};
    if (query.q) filter.name = { $regex: query.q, $options: 'i' };
    if (query.departmentId) filter.departmentId = new Types.ObjectId(query.departmentId);
    const limit = Math.min(Number(query.limit ?? 20), 100);
    const offset = Number(query.offset ?? 0);
    const [items, total] = await Promise.all([
      this.model.find(filter).skip(offset).limit(limit).sort({ createdAt: -1 }).exec(),
      this.model.countDocuments(filter).exec(),
    ]);
    return { items, total, limit, offset };
  }

  async findById(id: string) {
    const doc = await this.model.findById(id).exec();
    if (!doc) throw new NotFoundException('Branch not found');
    return doc;
  }

  async update(id: string, data: Partial<Branch>) {
    const doc = await this.model.findByIdAndUpdate(id, data, { new: true }).exec();
    if (!doc) throw new NotFoundException('Branch not found');
    return doc;
  }

  async remove(id: string) {
    await this.model.findByIdAndDelete(id).exec();
    return { deleted: true };
  }
} 