import { Model } from 'mongoose';
import { Employee } from './schemas/employee.schema';
export declare class EmployeesService {
    private readonly model;
    constructor(model: Model<Employee>);
    create(data: Partial<Employee>): Promise<import("mongoose").Document<unknown, {}, Employee, {}, {}> & Employee & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    findAll(query: {
        q?: string;
        limit?: number;
        offset?: number;
    }): Promise<{
        items: (import("mongoose").Document<unknown, {}, Employee, {}, {}> & Employee & Required<{
            _id: unknown;
        }> & {
            __v: number;
        })[];
        total: number;
        limit: number;
        offset: number;
    }>;
    findById(id: string): Promise<import("mongoose").Document<unknown, {}, Employee, {}, {}> & Employee & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    update(id: string, data: Partial<Employee>): Promise<import("mongoose").Document<unknown, {}, Employee, {}, {}> & Employee & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    remove(id: string): Promise<{
        deleted: boolean;
    }>;
}
