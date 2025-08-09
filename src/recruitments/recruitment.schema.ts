import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type RecruitmentStatus = 'OPEN' | 'CLOSED' | 'UPCOMING';

@Schema({ timestamps: true })
export class Recruitment extends Document {
  @Prop({ required: true })
  title!: string;

  @Prop()
  department?: string;

  @Prop({ enum: ['OPEN', 'CLOSED', 'UPCOMING'], default: 'OPEN' })
  status!: RecruitmentStatus;

  @Prop()
  applyUrl?: string;

  @Prop()
  publishedAt?: Date;
}

export const RecruitmentSchema = SchemaFactory.createForClass(Recruitment); 