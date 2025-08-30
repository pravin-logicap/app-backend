import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema({ timestamps: true })
export class Employee extends Document {
  @Prop({ type: Types.ObjectId, ref: 'User', index: true })
  userId?: Types.ObjectId;

  @Prop({ unique: true, sparse: true })
  code?: string;

  @Prop({ required: true, index: true })
  name!: string;

  @Prop({ index: true })
  phone?: string;

  @Prop()
  email?: string;

  @Prop()
  doj?: Date;

  @Prop({ type: [Types.ObjectId], ref: 'Asset', default: [] })
  documents!: Types.ObjectId[];

  @Prop({ default: 'ACTIVE', index: true })
  status!: 'ACTIVE' | 'INACTIVE';
}

export const EmployeeSchema = SchemaFactory.createForClass(Employee); 