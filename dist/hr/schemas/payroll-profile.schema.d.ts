import { Document, Types } from 'mongoose';
export declare class PayrollProfile extends Document {
    employeeId: Types.ObjectId;
    baseSalaryInMinor: number;
    cycle: 'MONTHLY' | 'WEEKLY';
    payDay: number;
    overtimeRatePerHourInMinor?: number;
    allowances: {
        name: string;
        amountInMinor: number;
    }[];
    deductions: {
        name: string;
        amountInMinor: number;
    }[];
}
export declare const PayrollProfileSchema: import("mongoose").Schema<PayrollProfile, import("mongoose").Model<PayrollProfile, any, any, any, Document<unknown, any, PayrollProfile, any, {}> & PayrollProfile & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, PayrollProfile, Document<unknown, {}, import("mongoose").FlatRecord<PayrollProfile>, {}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & import("mongoose").FlatRecord<PayrollProfile> & Required<{
    _id: unknown;
}> & {
    __v: number;
}>;
