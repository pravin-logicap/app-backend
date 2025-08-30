import { Injectable, ConflictException, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Role } from './role.schema';
import { ALL_PERMISSIONS } from './permissions';

export interface CreateRoleInput { roleId: string; name: string; permissions?: string[] }
export interface UpdateRoleInput { name?: string; permissions?: string[]; isActive?: boolean }

@Injectable()
export class RolesService {
  constructor(@InjectModel(Role.name) private readonly roleModel: Model<Role>) {}

  async create(input: CreateRoleInput): Promise<Role> {
    const exists = await this.roleModel.findOne({ roleId: input.roleId }).exec();
    if (exists) throw new ConflictException('roleId already exists');
    if(!input.permissions && input.roleId === 'superadmin') {
      input.permissions = ALL_PERMISSIONS as string[];
    }
    const role = new this.roleModel({ roleId: input.roleId, name: input.name, permissions: input.permissions ?? [] });
    return role.save();
  }

  async list(): Promise<Role[]> {
    return this.roleModel.find().sort({ roleId: 1 }).exec();
  }

  async getByRoleId(roleId: string): Promise<Role> {
    const role = await this.roleModel.findOne({ roleId }).exec();
    if (!role) throw new NotFoundException('Role not found');
    return role;
  }

  async update(roleId: string, input: UpdateRoleInput): Promise<Role> {
    const role = await this.roleModel.findOneAndUpdate({ roleId }, input, { new: true }).exec();
    if (!role) throw new NotFoundException('Role not found');
    return role;
  }
} 