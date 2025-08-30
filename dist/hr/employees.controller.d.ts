import { EmployeesService } from './employees.service';
export declare class EmployeesController {
    private readonly service;
    constructor(service: EmployeesService);
    list(q: any): Promise<{
        items: (import("mongoose").Document<unknown, {}, import("./schemas/employee.schema").Employee, {}, {}> & import("./schemas/employee.schema").Employee & Required<{
            _id: unknown;
        }> & {
            __v: number;
        })[];
        total: number;
        limit: number;
        offset: number;
    }>;
    get(id: string): Promise<import("mongoose").Document<unknown, {}, import("./schemas/employee.schema").Employee, {}, {}> & import("./schemas/employee.schema").Employee & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    create(body: any): Promise<import("mongoose").Document<unknown, {}, import("./schemas/employee.schema").Employee, {}, {}> & import("./schemas/employee.schema").Employee & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    update(id: string, body: any): Promise<import("mongoose").Document<unknown, {}, import("./schemas/employee.schema").Employee, {}, {}> & import("./schemas/employee.schema").Employee & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    remove(id: string): Promise<{
        deleted: boolean;
    }>;
}
