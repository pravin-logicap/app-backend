import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
export declare class AuthController {
    private readonly auth;
    constructor(auth: AuthService);
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
