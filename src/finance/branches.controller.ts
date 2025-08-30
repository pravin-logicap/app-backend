import { Body, Controller, Get, Post, Param, Query, Patch, Delete, UseGuards } from '@nestjs/common';
import { BranchesService } from './branches.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RolesGuard } from '../roles/roles.guard';
import { Permissions } from '../roles/roles.decorator';

@Controller('branches')
@UseGuards(JwtAuthGuard, RolesGuard)
export class BranchesController {
  constructor(private readonly service: BranchesService) {}

  @Get()
  async list(@Query() q: any) {
    return this.service.findAll(q);
  }

  @Get(':id')
  async get(@Param('id') id: string) {
    return this.service.findById(id);
  }

  @Post()
  @Permissions('branch:create')
  async create(@Body() body: any) {
    return this.service.create(body);
  }

  @Patch(':id')
  @Permissions('branch:update')
  async update(@Param('id') id: string, @Body() body: any) {
    return this.service.update(id, body);
  }

  @Delete(':id')
  @Permissions('branch:delete')
  async remove(@Param('id') id: string) {
    return this.service.remove(id);
  }
} 