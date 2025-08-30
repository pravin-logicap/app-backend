import { Model } from 'mongoose';
import { PayrollProfile } from './schemas/payroll-profile.schema';
export declare class PayrollProfilesService {
    private readonly model;
    constructor(model: Model<PayrollProfile>);
    upsert(employeeId: string, data: Partial<PayrollProfile>): Promise<import("mongoose").Document<unknown, {}, PayrollProfile, {}, {}> & PayrollProfile & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    get(employeeId: string): Promise<import("mongoose").Document<unknown, {}, PayrollProfile, {}, {}> & PayrollProfile & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
}
