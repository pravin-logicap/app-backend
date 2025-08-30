import { Injectable, Logger } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { ConfigService } from '@nestjs/config';

export type JwtPayload = { sub: string; email: string; isAdmin?: boolean; roleId?: string };

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  private readonly debug: boolean;

  constructor(config: ConfigService) {
    const secret = config.get<string>('JWT_SECRET');
    if (!secret) {
      throw new Error('JWT_SECRET is not set');
    }
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: secret,
    });
    this.debug = (config.get<string>('AUTH_DEBUG') ?? '').toLowerCase() === 'true';
  }

  async validate(payload: JwtPayload) {
    if (this.debug) {
      Logger.log(
        `JWT decoded -> sub:${payload.sub} email:${payload.email} isAdmin:${!!payload.isAdmin} roleId:${payload.roleId ?? 'N/A'}`,
        'JwtStrategy',
      );
    }
    return { userId: payload.sub, email: payload.email, isAdmin: !!payload.isAdmin, roleId: payload.roleId };
  }
} 