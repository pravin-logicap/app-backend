import { CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Model } from 'mongoose';
import { Role } from './role.schema';
export declare class RolesGuard implements CanActivate {
    private reflector;
    private readonly roleModel;
    constructor(reflector: Reflector, roleModel: Model<Role>);
    canActivate(context: ExecutionContext): Promise<boolean>;
}
