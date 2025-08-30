import { Body, Controller, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { RolesService } from './roles.service';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RolesGuard } from './roles.guard';
import { Permissions } from './roles.decorator';
import { ApiBearerAuth } from '@nestjs/swagger';


@ApiBearerAuth('JWT')
@Controller('roles')
@UseGuards(JwtAuthGuard, RolesGuard)
export class RolesController {
  constructor(private readonly service: RolesService) {}

  @Post()
  @Permissions('roles:create')
  async create(@Body() dto: CreateRoleDto) {
    const role = await this.service.create(dto);
    return { id: role.id, roleId: role.roleId };
  }

  @Get()
  @Permissions('roles:read')
  async list() {
    return (await this.service.list()).map((r) => ({ roleId: r.roleId, name: r.name, permissions: r.permissions, isActive: r.isActive }));
  }

  @Get(':roleId')
  @Permissions('roles:read')
  async get(@Param('roleId') roleId: string) {
    const r = await this.service.getByRoleId(roleId);
    return { roleId: r.roleId, name: r.name, permissions: r.permissions, isActive: r.isActive };
  }

  @Patch(':roleId')
  @Permissions('roles:update')
  async update(@Param('roleId') roleId: string, @Body() dto: UpdateRoleDto) {
    const r = await this.service.update(roleId, dto);
    return { roleId: r.roleId, name: r.name, permissions: r.permissions, isActive: r.isActive };
  }
} 