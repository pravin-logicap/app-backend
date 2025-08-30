import { Injectable, Logger, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  /*canActivate(context: ExecutionContext) {
    const req = context.switchToHttp().getRequest();
    const header: string | undefined = req?.headers?.authorization;
    const preview = header ? header.substring(0, Math.min(header.length, 24)) + '…' : 'none';
    Logger.log(`Incoming Authorization header: ${preview}`, 'JwtAuthGuard');
    return super.canActivate(context);
  }

  handleRequest(err: any, user: any, info: any, context: ExecutionContext, status?: any) {
    if (err || !user) {
      const msg = typeof info?.message === 'string' ? info.message : (err?.message || 'Unknown JWT error');
      Logger.warn(`JWT validation failed: ${msg}`, 'JwtAuthGuard');
      throw err || new UnauthorizedException(msg);
    }
    try {
      const safe = { userId: user.userId, email: user.email, isAdmin: user.isAdmin, roleId: user.roleId };
      Logger.log(`JWT validated user: ${JSON.stringify(safe)}`, 'JwtAuthGuard');
    } catch {}
    return user;
  }*/
} 