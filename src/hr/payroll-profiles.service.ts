import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PayrollProfile } from './schemas/payroll-profile.schema';

@Injectable()
export class PayrollProfilesService {
  constructor(@InjectModel(PayrollProfile.name) private readonly model: Model<PayrollProfile>) {}

  async upsert(employeeId: string, data: Partial<PayrollProfile>) {
    const doc = await this.model.findOneAndUpdate(
      { employeeId },
      { $set: data, employeeId },
      { new: true, upsert: true },
    ).exec();
    return doc;
  }

  async get(employeeId: string) {
    const doc = await this.model.findOne({ employeeId }).exec();
    if (!doc) throw new NotFoundException('Payroll profile not found');
    return doc;
  }
} 