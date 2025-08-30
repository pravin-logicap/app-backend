import { PayrollProfilesService } from './payroll-profiles.service';
export declare class PayrollProfilesController {
    private readonly service;
    constructor(service: PayrollProfilesService);
    get(employeeId: string): Promise<import("mongoose").Document<unknown, {}, import("./schemas/payroll-profile.schema").PayrollProfile, {}, {}> & import("./schemas/payroll-profile.schema").PayrollProfile & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    upsert(employeeId: string, body: any): Promise<import("mongoose").Document<unknown, {}, import("./schemas/payroll-profile.schema").PayrollProfile, {}, {}> & import("./schemas/payroll-profile.schema").PayrollProfile & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
}
