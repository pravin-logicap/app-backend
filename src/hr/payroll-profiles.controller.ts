import { Body, Controller, Get, Param, Put, UseGuards } from '@nestjs/common';
import { PayrollProfilesService } from './payroll-profiles.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RolesGuard } from '../roles/roles.guard';
import { Permissions } from '../roles/roles.decorator';

@Controller('payroll-profiles')
@UseGuards(JwtAuthGuard, RolesGuard)
export class PayrollProfilesController {
  constructor(private readonly service: PayrollProfilesService) {}

  @Get(':employeeId')
  async get(@Param('employeeId') employeeId: string) {
    return this.service.get(employeeId);
  }

  @Put(':employeeId')
  @Permissions('payroll:upsert')
  async upsert(@Param('employeeId') employeeId: string, @Body() body: any) {
    return this.service.upsert(employeeId, body);
  }
} 