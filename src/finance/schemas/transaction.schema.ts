import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema({ timestamps: true })
export class Transaction extends Document {
  @Prop({ type: Date, default: () => new Date(), index: true })
  date!: Date;

  @Prop({ required: true, index: true })
  txnType!: 'SALARY'|'ADVANCE_ISSUE'|'ADVANCE_SETTLE'|'VENDOR_PAYMENT'|'REIMBURSEMENT'|'ADJUSTMENT';

  @Prop({ required: true, index: true })
  method!: 'CASH'|'UPI_PHONEPE'|'UPI_GPAY'|'UPI_OTHER'|'BANK_TRANSFER'|'CHEQUE'|'OTHER';

  @Prop({ required: true })
  amountInMinor!: number;

  @Prop({ default: 'INR' })
  currency!: string;

  @Prop({ type: Types.ObjectId, ref: 'Employee', index: true, default: null })
  employeeId?: Types.ObjectId | null;

  @Prop({ type: Types.ObjectId, ref: 'Vendor', index: true, default: null })
  vendorId?: Types.ObjectId | null;

  @Prop({ type: Types.ObjectId, ref: 'Branch', index: true, default: null })
  branchId?: Types.ObjectId | null;

  @Prop({ type: Types.ObjectId, ref: 'Department', index: true, default: null })
  departmentId?: Types.ObjectId | null;

  @Prop()
  note?: string;

  @Prop()
  referenceNo?: string;

  @Prop({ type: [Types.ObjectId], ref: 'Asset', default: [] })
  assets!: Types.ObjectId[];

  @Prop({ type: [String], default: [] })
  tags!: string[];

  @Prop({ type: Object })
  advance?: { isAdvance?: boolean; settleAgainstTxnId?: Types.ObjectId | null };

  @Prop({ type: Types.ObjectId, ref: 'User' })
  createdBy?: Types.ObjectId;
}

export const TransactionSchema = SchemaFactory.createForClass(Transaction);
TransactionSchema.index({ employeeId: 1, date: -1 });
TransactionSchema.index({ vendorId: 1, date: -1 });
TransactionSchema.index({ branchId: 1, date: -1 });
TransactionSchema.index({ txnType: 1, date: -1 }); 