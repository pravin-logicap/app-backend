import { Document, Types } from 'mongoose';
export declare class Branch extends Document {
    name: string;
    code?: string;
    departmentId: Types.ObjectId;
    address?: {
        line1?: string;
        city?: string;
        state?: string;
        pincode?: string;
        lat?: number;
        lng?: number;
    };
    isActive: boolean;
}
export declare const BranchSchema: import("mongoose").Schema<Branch, import("mongoose").Model<Branch, any, any, any, Document<unknown, any, Branch, any, {}> & Branch & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Branch, Document<unknown, {}, import("mongoose").FlatRecord<Branch>, {}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & import("mongoose").FlatRecord<Branch> & Required<{
    _id: unknown;
}> & {
    __v: number;
}>;
