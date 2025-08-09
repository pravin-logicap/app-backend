import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class User extends Document {
  @Prop({ required: true })
  fullName!: string;

  @Prop({ required: true, unique: true, lowercase: true, index: true })
  email!: string;

  @Prop({ required: false })
  phone?: string;

  @Prop({ required: true })
  passwordHash!: string;

  @Prop({ type: Boolean, default: false })
  isAdmin!: boolean;

  @Prop({ required: false, index: true })
  roleId?: string;
}

export const UserSchema = SchemaFactory.createForClass(User); 