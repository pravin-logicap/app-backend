import { IsMongoId, IsNotEmpty } from 'class-validator';

export class AssignRoleDto {
  @IsMongoId({ message: 'userId must be a valid Mongo ID' })
  userId!: string;

  @IsNotEmpty({ message: 'roleId is required' })
  roleId!: string;
} 