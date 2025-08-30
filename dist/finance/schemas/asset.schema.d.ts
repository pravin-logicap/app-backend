import { Document, Types } from 'mongoose';
export declare class Asset extends Document {
    storage: 'S3';
    bucket?: string;
    key?: string;
    url?: string;
    contentType?: string;
    size?: number;
    tags: string[];
    linkedTo?: {
        entityType?: 'EMPLOYEE' | 'VENDOR' | 'BRANCH' | 'DEPARTMENT' | 'TRANSACTION';
        entityId?: Types.ObjectId;
    };
}
export declare const AssetSchema: import("mongoose").Schema<Asset, import("mongoose").Model<Asset, any, any, any, Document<unknown, any, Asset, any, {}> & Asset & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Asset, Document<unknown, {}, import("mongoose").FlatRecord<Asset>, {}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & import("mongoose").FlatRecord<Asset> & Required<{
    _id: unknown;
}> & {
    __v: number;
}>;
