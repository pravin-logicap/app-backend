import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class Role extends Document {
  @Prop({ required: true, unique: true, index: true })
  roleId!: string;

  @Prop({ required: true })
  name!: string;

  @Prop({ type: [String], default: [] })
  permissions!: string[];

  @Prop({ type: Boolean, default: true })
  isActive!: boolean;
}

export const RoleSchema = SchemaFactory.createForClass(Role); 