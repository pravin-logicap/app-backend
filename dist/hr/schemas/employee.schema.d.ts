import { Document, Types } from 'mongoose';
export declare class Employee extends Document {
    userId?: Types.ObjectId;
    code?: string;
    name: string;
    phone?: string;
    email?: string;
    doj?: Date;
    documents: Types.ObjectId[];
    status: 'ACTIVE' | 'INACTIVE';
}
export declare const EmployeeSchema: import("mongoose").Schema<Employee, import("mongoose").Model<Employee, any, any, any, Document<unknown, any, Employee, any, {}> & Employee & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Employee, Document<unknown, {}, import("mongoose").FlatRecord<Employee>, {}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & import("mongoose").FlatRecord<Employee> & Required<{
    _id: unknown;
}> & {
    __v: number;
}>;
