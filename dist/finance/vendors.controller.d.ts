import { VendorsService } from './vendors.service';
export declare class VendorsController {
    private readonly service;
    constructor(service: VendorsService);
    list(q: any): Promise<{
        items: (import("mongoose").Document<unknown, {}, import("./schemas/vendor.schema").Vendor, {}, {}> & import("./schemas/vendor.schema").Vendor & Required<{
            _id: unknown;
        }> & {
            __v: number;
        })[];
        total: number;
        limit: number;
        offset: number;
    }>;
    get(id: string): Promise<import("mongoose").Document<unknown, {}, import("./schemas/vendor.schema").Vendor, {}, {}> & import("./schemas/vendor.schema").Vendor & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    create(body: any): Promise<import("mongoose").Document<unknown, {}, import("./schemas/vendor.schema").Vendor, {}, {}> & import("./schemas/vendor.schema").Vendor & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    update(id: string, body: any): Promise<import("mongoose").Document<unknown, {}, import("./schemas/vendor.schema").Vendor, {}, {}> & import("./schemas/vendor.schema").Vendor & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    remove(id: string): Promise<{
        deleted: boolean;
    }>;
}
