import { Body, Controller, Get, Param, Post, Query, UseGuards } from '@nestjs/common';
import { AssignmentsService } from './assignments.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RolesGuard } from '../roles/roles.guard';
import { Permissions } from '../roles/roles.decorator';

@Controller('employee-assignments')
@UseGuards(JwtAuthGuard, RolesGuard)
export class AssignmentsController {
  constructor(private readonly service: AssignmentsService) {}

  @Get('by-employee/:employeeId')
  async list(@Param('employeeId') employeeId: string, @Query('active') active?: string) {
    return this.service.listByEmployee(employeeId, active === 'true');
  }

  @Get('current/:employeeId')
  async current(@Param('employeeId') employeeId: string) {
    return this.service.currentForEmployee(employeeId);
  }

  @Post('move')
  @Permissions('employee:move')
  async move(@Body() body: any) {
    return this.service.moveEmployee(body);
  }
} 