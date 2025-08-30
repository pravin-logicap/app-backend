import { AssignmentsService } from './assignments.service';
export declare class AssignmentsController {
    private readonly service;
    constructor(service: AssignmentsService);
    list(employeeId: string, active?: string): Promise<(import("mongoose").Document<unknown, {}, import("./schemas/employee-assignment.schema").EmployeeAssignment, {}, {}> & import("./schemas/employee-assignment.schema").EmployeeAssignment & Required<{
        _id: unknown;
    }> & {
        __v: number;
    })[]>;
    current(employeeId: string): Promise<import("mongoose").Document<unknown, {}, import("./schemas/employee-assignment.schema").EmployeeAssignment, {}, {}> & import("./schemas/employee-assignment.schema").EmployeeAssignment & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    move(body: any): Promise<import("mongoose").Document<unknown, {}, import("./schemas/employee-assignment.schema").EmployeeAssignment, {}, {}> & import("./schemas/employee-assignment.schema").EmployeeAssignment & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
}
