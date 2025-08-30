import { AssetsService } from './assets.service';
export declare class AssetsController {
    private readonly service;
    constructor(service: AssetsService);
    create(body: any): Promise<import("mongoose").Document<unknown, {}, import("./schemas/asset.schema").Asset, {}, {}> & import("./schemas/asset.schema").Asset & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    link(assetId: string, entityType: 'EMPLOYEE' | 'VENDOR' | 'BRANCH' | 'DEPARTMENT' | 'TRANSACTION', entityId: string): Promise<(import("mongoose").Document<unknown, {}, import("./schemas/asset.schema").Asset, {}, {}> & import("./schemas/asset.schema").Asset & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }) | null>;
    presign(body: any): Promise<{
        url: string;
        fields: {};
    }>;
}
