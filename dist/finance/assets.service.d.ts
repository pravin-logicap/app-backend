import { Model } from 'mongoose';
import { Asset } from './schemas/asset.schema';
export declare class AssetsService {
    private readonly model;
    constructor(model: Model<Asset>);
    create(data: Partial<Asset>): Promise<import("mongoose").Document<unknown, {}, Asset, {}, {}> & Asset & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    linkTo(entity: {
        entityType: 'EMPLOYEE' | 'VENDOR' | 'BRANCH' | 'DEPARTMENT' | 'TRANSACTION';
        entityId: string;
    }, assetId: string): Promise<(import("mongoose").Document<unknown, {}, Asset, {}, {}> & Asset & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }) | null>;
    presignUpload(_input: {
        contentType: string;
        keyHint?: string;
    }): Promise<{
        url: string;
        fields: {};
    }>;
}
