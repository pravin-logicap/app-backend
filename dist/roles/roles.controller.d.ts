import { RolesService } from './roles.service';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
export declare class RolesController {
    private readonly service;
    constructor(service: RolesService);
    create(dto: CreateRoleDto): Promise<{
        id: any;
        roleId: string;
    }>;
    list(): Promise<{
        roleId: string;
        name: string;
        permissions: string[];
        isActive: boolean;
    }[]>;
    get(roleId: string): Promise<{
        roleId: string;
        name: string;
        permissions: string[];
        isActive: boolean;
    }>;
    update(roleId: string, dto: UpdateRoleDto): Promise<{
        roleId: string;
        name: string;
        permissions: string[];
        isActive: boolean;
    }>;
}
