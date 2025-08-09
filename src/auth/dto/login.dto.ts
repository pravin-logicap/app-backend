import { IsEmail, MinLength } from 'class-validator';

export class LoginDto {
  @IsEmail({}, { message: 'Email must be a valid email address' })
  email!: string;

  @MinLength(5, { message: 'Password must be at least 5 characters long' })
  password!: string;
} 