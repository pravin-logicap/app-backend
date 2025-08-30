import { Body, Controller, Get, Post, Param, Query, Patch, Delete, UseGuards } from '@nestjs/common';
import { EmployeesService } from './employees.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RolesGuard } from '../roles/roles.guard';
import { Permissions } from '../roles/roles.decorator';

@Controller('employees')
@UseGuards(JwtAuthGuard, RolesGuard)
export class EmployeesController {
  constructor(private readonly service: EmployeesService) {}

  @Get()
  async list(@Query() q: any) {
    return this.service.findAll(q);
  }

  @Get(':id')
  async get(@Param('id') id: string) {
    return this.service.findById(id);
  }

  @Post()
  @Permissions('employee:create')
  async create(@Body() body: any) {
    return this.service.create(body);
  }

  @Patch(':id')
  @Permissions('employee:update')
  async update(@Param('id') id: string, @Body() body: any) {
    return this.service.update(id, body);
  }

  @Delete(':id')
  @Permissions('employee:delete')
  async remove(@Param('id') id: string) {
    return this.service.remove(id);
  }
} 