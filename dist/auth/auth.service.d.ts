import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
export declare class AuthService {
    private readonly users;
    private readonly jwt;
    constructor(users: UsersService, jwt: JwtService);
    register(dto: RegisterDto): Promise<{
        id: any;
        email: string;
    }>;
    login(dto: LoginDto): Promise<{
        token: string;
    }>;
    adminLogin(dto: LoginDto): Promise<{
        token: string;
    }>;
}
