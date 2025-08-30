import { Document, Types } from 'mongoose';
export declare class EmployeeAssignment extends Document {
    employeeId: Types.ObjectId;
    departmentId: Types.ObjectId;
    branchId: Types.ObjectId;
    vendorId?: Types.ObjectId | null;
    effectiveFrom: Date;
    effectiveTo?: Date | null;
    status: 'ACTIVE' | 'ENDED';
    note?: string;
}
export declare const EmployeeAssignmentSchema: import("mongoose").Schema<EmployeeAssignment, import("mongoose").Model<EmployeeAssignment, any, any, any, Document<unknown, any, EmployeeAssignment, any, {}> & EmployeeAssignment & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, EmployeeAssignment, Document<unknown, {}, import("mongoose").FlatRecord<EmployeeAssignment>, {}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & import("mongoose").FlatRecord<EmployeeAssignment> & Required<{
    _id: unknown;
}> & {
    __v: number;
}>;
