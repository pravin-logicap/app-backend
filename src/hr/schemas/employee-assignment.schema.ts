import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema({ timestamps: true })
export class EmployeeAssignment extends Document {
  @Prop({ type: Types.ObjectId, ref: 'Employee', index: true })
  employeeId!: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: 'Department', index: true })
  departmentId!: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: 'Branch', index: true })
  branchId!: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: 'Vendor', index: true, default: null })
  vendorId?: Types.ObjectId | null;

  @Prop({ type: Date, index: true })
  effectiveFrom!: Date;

  @Prop({ type: Date, index: true, default: null })
  effectiveTo?: Date | null;

  @Prop({ default: 'ACTIVE', index: true })
  status!: 'ACTIVE' | 'ENDED';

  @Prop()
  note?: string;
}

export const EmployeeAssignmentSchema = SchemaFactory.createForClass(EmployeeAssignment);
EmployeeAssignmentSchema.index({ employeeId: 1, effectiveFrom: -1 });
EmployeeAssignmentSchema.index({ employeeId: 1, status: 1 }); 