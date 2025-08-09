import { CanActivate, ExecutionContext, Injectable, ForbiddenException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { PERMISSIONS_KEY } from './roles.decorator';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Role } from './role.schema';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector, @InjectModel(Role.name) private readonly roleModel: Model<Role>) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const required = this.reflector.getAllAndOverride<string[]>(PERMISSIONS_KEY, [
      context.getHandler(),
      context.getClass(),
    ]) || [];

    const req = context.switchToHttp().getRequest();
    const user = req.user as { isAdmin?: boolean; roleId?: string } | undefined;

    if (!user?.isAdmin) throw new ForbiddenException('Admin access required');
    if (required.length === 0) return true;

    if (!user.roleId) throw new ForbiddenException('No role assigned');
    const role = await this.roleModel.findOne({ roleId: user.roleId }).exec();
    if (!role || !role.isActive) throw new ForbiddenException('Role not active');

    const allowed = new Set(role.permissions);
    const ok = required.every((p) => allowed.has(p));
    if (!ok) throw new ForbiddenException('Insufficient role permissions');
    return true;
  }
} 