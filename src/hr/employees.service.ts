import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, FilterQuery } from 'mongoose';
import { Employee } from './schemas/employee.schema';

@Injectable()
export class EmployeesService {
  constructor(@InjectModel(Employee.name) private readonly model: Model<Employee>) {}

  async create(data: Partial<Employee>) {
    const doc = new this.model(data);
    return doc.save();
  }

  async findAll(query: { q?: string; limit?: number; offset?: number }) {
    const filter: FilterQuery<Employee> = {};
    if (query.q) filter.name = { $regex: query.q, $options: 'i' };
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
    if (!doc) throw new NotFoundException('Employee not found');
    return doc;
  }

  async update(id: string, data: Partial<Employee>) {
    const doc = await this.model.findByIdAndUpdate(id, data, { new: true }).exec();
    if (!doc) throw new NotFoundException('Employee not found');
    return doc;
  }

  async remove(id: string) {
    await this.model.findByIdAndDelete(id).exec();
    return { deleted: true };
  }
} 