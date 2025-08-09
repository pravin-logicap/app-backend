import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Recruitment } from './recruitment.schema';

export interface CreateRecruitmentInput {
  title: string;
  department?: string;
  status?: 'OPEN' | 'CLOSED' | 'UPCOMING';
  applyUrl?: string;
  publishedAt?: Date;
}

@Injectable()
export class RecruitmentsService {
  constructor(@InjectModel(Recruitment.name) private readonly model: Model<Recruitment>) {}

  async listAll(): Promise<Recruitment[]> {
    return this.model.find().sort({ createdAt: -1 }).exec();
  }

  async create(input: CreateRecruitmentInput): Promise<Recruitment> {
    const rec = new this.model(input);
    return rec.save();
  }
} 