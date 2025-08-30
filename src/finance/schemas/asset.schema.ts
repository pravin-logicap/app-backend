import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema({ timestamps: true })
export class Asset extends Document {
  @Prop({ default: 'S3' })
  storage!: 'S3';

  @Prop()
  bucket?: string;

  @Prop()
  key?: string;

  @Prop()
  url?: string;

  @Prop()
  contentType?: string;

  @Prop()
  size?: number;

  @Prop({ type: [String], default: [] })
  tags!: string[];

  @Prop({ type: Object })
  linkedTo?: { entityType?: 'EMPLOYEE'|'VENDOR'|'BRANCH'|'DEPARTMENT'|'TRANSACTION'; entityId?: Types.ObjectId };
}

export const AssetSchema = SchemaFactory.createForClass(Asset);
AssetSchema.index({ 'linkedTo.entityType': 1, 'linkedTo.entityId': 1 }); 