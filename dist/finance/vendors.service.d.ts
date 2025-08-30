import { Model } from 'mongoose';
import { Vendor } from './schemas/vendor.schema';
export declare class VendorsService {
    private readonly model;
    constructor(model: Model<Vendor>);
    create(data: Partial<Vendor>): Promise<import("mongoose").Document<unknown, {}, Vendor, {}, {}> & Vendor & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    findAll(query: {
        q?: string;
        limit?: number;
        offset?: number;
    }): Promise<{
        items: (import("mongoose").Document<unknown, {}, Vendor, {}, {}> & Vendor & Required<{
            _id: unknown;
        }> & {
            __v: number;
        })[];
        total: number;
        limit: number;
        offset: number;
    }>;
    findById(id: string): Promise<import("mongoose").Document<unknown, {}, Vendor, {}, {}> & Vendor & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    update(id: string, data: Partial<Vendor>): Promise<import("mongoose").Document<unknown, {}, Vendor, {}, {}> & Vendor & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    remove(id: string): Promise<{
        deleted: boolean;
    }>;
}
