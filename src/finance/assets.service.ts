import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Asset } from './schemas/asset.schema';

@Injectable()
export class AssetsService {
  constructor(@InjectModel(Asset.name) private readonly model: Model<Asset>) {}

  async create(data: Partial<Asset>) {
    const doc = new this.model(data);
    return doc.save();
  }

  async linkTo(entity: { entityType: 'EMPLOYEE'|'VENDOR'|'BRANCH'|'DEPARTMENT'|'TRANSACTION'; entityId: string }, assetId: string) {
    const doc = await this.model.findByIdAndUpdate(
      assetId,
      { $set: { linkedTo: { entityType: entity.entityType, entityId: new Types.ObjectId(entity.entityId) } } },
      { new: true },
    ).exec();
    return doc;
  }

  // Placeholder for S3 presign workflow (client can upload directly to S3)
  // You can implement with AWS SDK v3 (@aws-sdk/s3-request-presigner) when ready.
  async presignUpload(_input: { contentType: string; keyHint?: string }) {
    return { url: 'https://s3-presign-url', fields: {} };
  }
} 