import { IsArray, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateRoleDto {
  @IsNotEmpty({ message: 'roleId is required' })
  roleId!: string;

  @IsNotEmpty({ message: 'name is required' })
  name!: string;

  @IsOptional()
  @IsArray({ message: 'permissions must be an array of strings' })
  permissions?: string[];
} 