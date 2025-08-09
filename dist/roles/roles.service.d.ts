import { Model } from 'mongoose';
import { Role } from './role.schema';
export interface CreateRoleInput {
    roleId: string;
    name: string;
    permissions?: string[];
}
export interface UpdateRoleInput {
    name?: string;
    permissions?: string[];
    isActive?: boolean;
}
export declare class RolesService {
    private readonly roleModel;
    constructor(roleModel: Model<Role>);
    create(input: CreateRoleInput): Promise<Role>;
    list(): Promise<Role[]>;
    getByRoleId(roleId: string): Promise<Role>;
    update(roleId: string, input: UpdateRoleInput): Promise<Role>;
}
