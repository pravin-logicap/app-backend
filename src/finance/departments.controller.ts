import { Body, Controller, Get, Post, Param, Query, Patch, Delete, UseGuards } from '@nestjs/common';
import { DepartmentsService } from './departments.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RolesGuard } from '../roles/roles.guard';
import { Permissions } from '../roles/roles.decorator';
import { ApiBearerAuth, ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateDepartmentDto } from './dto/department.dto';

@ApiTags('Departments')
@ApiBearerAuth('JWT')
@Controller('departments')
@UseGuards(JwtAuthGuard, RolesGuard)
export class DepartmentsController {
  constructor(private readonly service: DepartmentsService) {}

  @Get()
  async list(@Query() q: any) {
    return this.service.findAll(q);
  }

  @Get(':id')
  async get(@Param('id') id: string) {
    return this.service.findById(id);
  }

  @Post()
  @ApiOperation({ summary: 'Create department' })
  @ApiBody({ type: CreateDepartmentDto })
  @Permissions('department:create')
  async create(@Body() body: CreateDepartmentDto) {
    const { id, name, description } = body;
    return this.service.create({ name, code: id, description });
  }

  @Patch(':id')
  @Permissions('department:update')
  async update(@Param('id') id: string, @Body() body: any) {
    return this.service.update(id, body);
  }

  @Delete(':id')
  @Permissions('department:delete')
  async remove(@Param('id') id: string) {
    return this.service.remove(id);
  }
} 