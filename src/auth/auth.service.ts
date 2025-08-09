import { Injectable, UnauthorizedException, ForbiddenException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  constructor(private readonly users: UsersService, private readonly jwt: JwtService) {}

  async register(dto: RegisterDto) {
    const user = await this.users.createUser(dto);
    return { id: user.id, email: user.email };
  }

  async login(dto: LoginDto) {
    const user = await this.users.findByEmail(dto.email);
    if (!user) throw new UnauthorizedException('Invalid credentials');
    const isValid = await this.users.validatePassword(user, dto.password);
    if (!isValid) throw new UnauthorizedException('Invalid credentials');
    const token = await this.jwt.signAsync({ sub: user.id, email: user.email, isAdmin: user.isAdmin, roleId: user.roleId });
    return { token };
  }

  async adminLogin(dto: LoginDto) {
    const user = await this.users.findByEmail(dto.email);
    if (!user) throw new UnauthorizedException('Invalid credentials');
    const isValid = await this.users.validatePassword(user, dto.password);
    if (!isValid) throw new UnauthorizedException('Invalid credentials');
    if (!user.isAdmin) throw new ForbiddenException('Admin access required');
    const token = await this.jwt.signAsync({ sub: user.id, email: user.email, isAdmin: true, roleId: user.roleId });
    return { token };
  }
} 