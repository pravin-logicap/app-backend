import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { EmployeeAssignment } from './schemas/employee-assignment.schema';

@Injectable()
export class AssignmentsService {
  constructor(@InjectModel(EmployeeAssignment.name) private readonly model: Model<EmployeeAssignment>) {}

  async create(data: {
    employeeId: string;
    departmentId: string;
    branchId: string;
    vendorId?: string | null;
    effectiveFrom?: Date;
    note?: string;
  }) {
    const doc = new this.model({
      employeeId: new Types.ObjectId(data.employeeId),
      departmentId: new Types.ObjectId(data.departmentId),
      branchId: new Types.ObjectId(data.branchId),
      vendorId: data.vendorId ? new Types.ObjectId(data.vendorId) : null,
      effectiveFrom: data.effectiveFrom ?? new Date(),
      status: 'ACTIVE',
      note: data.note,
    });
    return doc.save();
  }

  async endAssignment(id: string, effectiveTo?: Date) {
    const doc = await this.model
      .findByIdAndUpdate(id, { status: 'ENDED', effectiveTo: effectiveTo ?? new Date() }, { new: true })
      .exec();
    if (!doc) throw new NotFoundException('Assignment not found');
    return doc;
  }

  async listByEmployee(employeeId: string, onlyActive = false) {
    const filter: any = { employeeId: new Types.ObjectId(employeeId) };
    if (onlyActive) filter.status = 'ACTIVE';
    return this.model.find(filter).sort({ effectiveFrom: -1 }).exec();
  }

  async currentForEmployee(employeeId: string) {
    const doc = await this.model
      .findOne({ employeeId: new Types.ObjectId(employeeId), status: 'ACTIVE' })
      .sort({ effectiveFrom: -1 })
      .exec();
    if (!doc) throw new NotFoundException('No active assignment');
    return doc;
  }

  async moveEmployee(data: {
    employeeId: string;
    departmentId: string;
    branchId: string;
    vendorId?: string | null;
    effectiveFrom?: Date;
    note?: string;
  }) {
    // End current assignment if any
    const current = await this.model
      .findOne({ employeeId: new Types.ObjectId(data.employeeId), status: 'ACTIVE' })
      .exec();
    if (current) {
      await this.endAssignment((current as any)._id.toString(), new Date());
    }
    // Create new
    return this.create(data);
  }
} 