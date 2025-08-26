import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { ConfigService } from '@nestjs/config';
export declare class AuthService {
    private readonly users;
    private readonly jwt;
    private readonly config;
    constructor(users: UsersService, jwt: JwtService, config: ConfigService);
    register(dto: RegisterDto): Promise<{
        id: any;
        email: string;
    }>;
    adLogin(): Promise<{
        message: string;
    }>;
    login(dto: LoginDto): Promise<{
        token: string;
    }>;
    adminLogin(dto: LoginDto): Promise<{
        token: string;
    }>;
    getGoogleAdsAuthUrl(): Promise<{
        url: any;
    }>;
    handleGoogleAdsCallback(code: string): Promise<any>;
    getAdsAccounts(token: string): Promise<Response>;
}
