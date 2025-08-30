import { Model } from 'mongoose';
import { EmployeeAssignment } from './schemas/employee-assignment.schema';
export declare class AssignmentsService {
    private readonly model;
    constructor(model: Model<EmployeeAssignment>);
    create(data: {
        employeeId: string;
        departmentId: string;
        branchId: string;
        vendorId?: string | null;
        effectiveFrom?: Date;
        note?: string;
    }): Promise<import("mongoose").Document<unknown, {}, EmployeeAssignment, {}, {}> & EmployeeAssignment & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    endAssignment(id: string, effectiveTo?: Date): Promise<import("mongoose").Document<unknown, {}, EmployeeAssignment, {}, {}> & EmployeeAssignment & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    listByEmployee(employeeId: string, onlyActive?: boolean): Promise<(import("mongoose").Document<unknown, {}, EmployeeAssignment, {}, {}> & EmployeeAssignment & Required<{
        _id: unknown;
    }> & {
        __v: number;
    })[]>;
    currentForEmployee(employeeId: string): Promise<import("mongoose").Document<unknown, {}, EmployeeAssignment, {}, {}> & EmployeeAssignment & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    moveEmployee(data: {
        employeeId: string;
        departmentId: string;
        branchId: string;
        vendorId?: string | null;
        effectiveFrom?: Date;
        note?: string;
    }): Promise<import("mongoose").Document<unknown, {}, EmployeeAssignment, {}, {}> & EmployeeAssignment & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
}
