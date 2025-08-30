import { BranchesService } from './branches.service';
export declare class BranchesController {
    private readonly service;
    constructor(service: BranchesService);
    list(q: any): Promise<{
        items: (import("mongoose").Document<unknown, {}, import("./schemas/branch.schema").Branch, {}, {}> & import("./schemas/branch.schema").Branch & Required<{
            _id: unknown;
        }> & {
            __v: number;
        })[];
        total: number;
        limit: number;
        offset: number;
    }>;
    get(id: string): Promise<import("mongoose").Document<unknown, {}, import("./schemas/branch.schema").Branch, {}, {}> & import("./schemas/branch.schema").Branch & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    create(body: any): Promise<import("mongoose").Document<unknown, {}, import("./schemas/branch.schema").Branch, {}, {}> & import("./schemas/branch.schema").Branch & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    update(id: string, body: any): Promise<import("mongoose").Document<unknown, {}, import("./schemas/branch.schema").Branch, {}, {}> & import("./schemas/branch.schema").Branch & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    remove(id: string): Promise<{
        deleted: boolean;
    }>;
}
