import { IsEmail, IsNotEmpty, IsOptional, MinLength } from 'class-validator';

export class RegisterDto {
  @IsNotEmpty({ message: 'Full name is required' })
  fullName!: string;

  @IsEmail({}, { message: 'Email must be a valid email address' })
  email!: string;

  @IsOptional()
  phone?: string;

  @MinLength(5, { message: 'Password must be at least 5 characters long' })
  password!: string;

  @IsOptional()
  roleId?: string;

  @IsOptional()
  isAdmin?: boolean;
} 