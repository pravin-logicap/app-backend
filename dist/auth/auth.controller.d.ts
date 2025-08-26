import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import type { Response } from 'express';
export declare class AuthController {
    private readonly auth;
    constructor(auth: AuthService);
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
    googleAdsCallback(code: string, res: Response): Promise<void>;
    getAdsAccounts(token: string): Promise<globalThis.Response>;
}
