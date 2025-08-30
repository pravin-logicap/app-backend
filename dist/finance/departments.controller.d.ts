import { DepartmentsService } from './departments.service';
import { CreateDepartmentDto } from './dto/department.dto';
export declare class DepartmentsController {
    private readonly service;
    constructor(service: DepartmentsService);
    list(q: any): Promise<{
        items: (import("mongoose").Document<unknown, {}, import("./schemas/department.schema").Department, {}, {}> & import("./schemas/department.schema").Department & Required<{
            _id: unknown;
        }> & {
            __v: number;
        })[];
        total: number;
        limit: number;
        offset: number;
    }>;
    get(id: string): Promise<import("mongoose").Document<unknown, {}, import("./schemas/department.schema").Department, {}, {}> & import("./schemas/department.schema").Department & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    create(body: CreateDepartmentDto): Promise<import("mongoose").Document<unknown, {}, import("./schemas/department.schema").Department, {}, {}> & import("./schemas/department.schema").Department & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    update(id: string, body: any): Promise<import("mongoose").Document<unknown, {}, import("./schemas/department.schema").Department, {}, {}> & import("./schemas/department.schema").Department & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    remove(id: string): Promise<{
        deleted: boolean;
    }>;
}
