import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema({ timestamps: true })
export class PayrollProfile extends Document {
  @Prop({ type: Types.ObjectId, ref: 'Employee', unique: true, index: true })
  employeeId!: Types.ObjectId;

  @Prop({ type: Number, default: 0 })
  baseSalaryInMinor!: number; // paise

  @Prop({ default: 'MONTHLY' })
  cycle!: 'MONTHLY' | 'WEEKLY';

  @Prop({ type: Number, default: 1 })
  payDay!: number;

  @Prop({ type: Number })
  overtimeRatePerHourInMinor?: number;

  @Prop({ type: [{ name: String, amountInMinor: Number }], default: [] })
  allowances!: { name: string; amountInMinor: number }[];

  @Prop({ type: [{ name: String, amountInMinor: Number }], default: [] })
  deductions!: { name: string; amountInMinor: number }[];
}

export const PayrollProfileSchema = SchemaFactory.createForClass(PayrollProfile); 