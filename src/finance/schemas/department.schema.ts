import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class Department extends Document {
  @Prop({ required: true, unique: true, index: true })
  name!: string;

  @Prop({ required: false, unique: true, sparse: true })
  code?: string;

  @Prop()
  description?: string;
}

export const DepartmentSchema = SchemaFactory.createForClass(Department); 