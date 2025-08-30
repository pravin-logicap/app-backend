import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema({ timestamps: true })
export class Branch extends Document {
  @Prop({ required: true })
  name!: string;

  @Prop()
  code?: string;

  @Prop({ type: Types.ObjectId, ref: 'Department', index: true })
  departmentId!: Types.ObjectId;

  @Prop({ type: Object })
  address?: {
    line1?: string;
    city?: string;
    state?: string;
    pincode?: string;
    lat?: number;
    lng?: number;
  };

  @Prop({ type: Boolean, default: true })
  isActive!: boolean;
}

export const BranchSchema = SchemaFactory.createForClass(Branch);
BranchSchema.index({ departmentId: 1, name: 1 }, { unique: true }); 