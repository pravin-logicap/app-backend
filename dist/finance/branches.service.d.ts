import { Model } from 'mongoose';
import { Branch } from './schemas/branch.schema';
export declare class BranchesService {
    private readonly model;
    constructor(model: Model<Branch>);
    create(data: Partial<Branch>): Promise<import("mongoose").Document<unknown, {}, Branch, {}, {}> & Branch & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    findAll(query: {
        q?: string;
        departmentId?: string;
        limit?: number;
        offset?: number;
    }): Promise<{
        items: (import("mongoose").Document<unknown, {}, Branch, {}, {}> & Branch & Required<{
            _id: unknown;
        }> & {
            __v: number;
        })[];
        total: number;
        limit: number;
        offset: number;
    }>;
    findById(id: string): Promise<import("mongoose").Document<unknown, {}, Branch, {}, {}> & Branch & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    update(id: string, data: Partial<Branch>): Promise<import("mongoose").Document<unknown, {}, Branch, {}, {}> & Branch & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    remove(id: string): Promise<{
        deleted: boolean;
    }>;
}
