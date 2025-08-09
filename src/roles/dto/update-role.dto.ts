import { IsArray, IsBoolean, IsOptional } from 'class-validator';

export class UpdateRoleDto {
  @IsOptional()
  name?: string;

  @IsOptional()
  @IsArray({ message: 'permissions must be an array of strings' })
  permissions?: string[];

  @IsOptional()
  @IsBoolean()
  isActive?: boolean;
} 