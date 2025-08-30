import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Employee, EmployeeSchema } from './schemas/employee.schema';
import { EmployeeAssignment, EmployeeAssignmentSchema } from './schemas/employee-assignment.schema';
import { PayrollProfile, PayrollProfileSchema } from './schemas/payroll-profile.schema';
import { EmployeesController } from './employees.controller';
import { EmployeesService } from './employees.service';
import { AssignmentsController } from './assignments.controller';
import { AssignmentsService } from './assignments.service';
import { PayrollProfilesController } from './payroll-profiles.controller';
import { PayrollProfilesService } from './payroll-profiles.service';
import { RolesModule } from '../roles/roles.module';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Employee.name, schema: EmployeeSchema },
      { name: EmployeeAssignment.name, schema: EmployeeAssignmentSchema },
      { name: PayrollProfile.name, schema: PayrollProfileSchema },
    ]),
    RolesModule,
  ],
  controllers: [EmployeesController, AssignmentsController, PayrollProfilesController],
  providers: [EmployeesService, AssignmentsService, PayrollProfilesService],
  exports: [MongooseModule],
})
export class HRModule {} 