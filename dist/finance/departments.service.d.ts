import { Model } from 'mongoose';
import { Department } from './schemas/department.schema';
export declare class DepartmentsService {
    private readonly model;
    constructor(model: Model<Department>);
    create(data: Partial<Department>): Promise<import("mongoose").Document<unknown, {}, Department, {}, {}> & Department & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    findAll(query: {
        q?: string;
        limit?: number;
        offset?: number;
    }): Promise<{
        items: (import("mongoose").Document<unknown, {}, Department, {}, {}> & Department & Required<{
            _id: unknown;
        }> & {
            __v: number;
        })[];
        total: number;
        limit: number;
        offset: number;
    }>;
    findById(id: string): Promise<import("mongoose").Document<unknown, {}, Department, {}, {}> & Department & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    update(id: string, data: Partial<Department>): Promise<import("mongoose").Document<unknown, {}, Department, {}, {}> & Department & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    remove(id: string): Promise<{
        deleted: boolean;
    }>;
}
