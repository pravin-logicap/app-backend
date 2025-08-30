"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HRModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const employee_schema_1 = require("./schemas/employee.schema");
const employee_assignment_schema_1 = require("./schemas/employee-assignment.schema");
const payroll_profile_schema_1 = require("./schemas/payroll-profile.schema");
const employees_controller_1 = require("./employees.controller");
const employees_service_1 = require("./employees.service");
const assignments_controller_1 = require("./assignments.controller");
const assignments_service_1 = require("./assignments.service");
const payroll_profiles_controller_1 = require("./payroll-profiles.controller");
const payroll_profiles_service_1 = require("./payroll-profiles.service");
const roles_module_1 = require("../roles/roles.module");
let HRModule = class HRModule {
};
exports.HRModule = HRModule;
exports.HRModule = HRModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: employee_schema_1.Employee.name, schema: employee_schema_1.EmployeeSchema },
                { name: employee_assignment_schema_1.EmployeeAssignment.name, schema: employee_assignment_schema_1.EmployeeAssignmentSchema },
                { name: payroll_profile_schema_1.PayrollProfile.name, schema: payroll_profile_schema_1.PayrollProfileSchema },
            ]),
            roles_module_1.RolesModule,
        ],
        controllers: [employees_controller_1.EmployeesController, assignments_controller_1.AssignmentsController, payroll_profiles_controller_1.PayrollProfilesController],
        providers: [employees_service_1.EmployeesService, assignments_service_1.AssignmentsService, payroll_profiles_service_1.PayrollProfilesService],
        exports: [mongoose_1.MongooseModule],
    })
], HRModule);
//# sourceMappingURL=hr.module.js.map