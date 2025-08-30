import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class Vendor extends Document {
  @Prop({ required: true, index: true })
  name!: string;

  @Prop({ type: Object })
  contact?: { person?: string; phone?: string; email?: string };

  @Prop()
  upi?: string;

  @Prop({ type: Object })
  bank?: { accountName?: string; accountNo?: string; ifsc?: string };

  @Prop()
  gstin?: string;

  @Prop({ type: Boolean, default: true })
  isActive!: boolean;
}

export const VendorSchema = SchemaFactory.createForClass(Vendor); 