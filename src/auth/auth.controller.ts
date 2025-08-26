import { Body, Controller, HttpCode, Post, Get, Query, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import type { Response } from 'express';

@Controller('auth')
export class AuthController {
  constructor(private readonly auth: AuthService) {}

  @Post('register')
  async register(@Body() dto: RegisterDto) {
    return this.auth.register(dto);
  }

  @Get('/google-ads-login')
  async adLogin() {
    return this.auth.adLogin();
  }

  @Post('login')
  @HttpCode(200)
  async login(@Body() dto: LoginDto) {
    return this.auth.login(dto);
  }

  @Post('admin/login')
  @HttpCode(200)
  async adminLogin(@Body() dto: LoginDto) {
    return this.auth.adminLogin(dto);
  }

  @Get('/google-ads-auth-url')
  async getGoogleAdsAuthUrl() {
    return this.auth.getGoogleAdsAuthUrl();
  }

  @Get('/google-ads-callback')
  async googleAdsCallback(@Query('code') code: string, @Res() res: Response) {
    const tokens = await this.auth.handleGoogleAdsCallback(code);
    // For demonstration, use access_token as token
    const token = tokens.id_token || tokens.access_token;
    return res.redirect(`http://localhost:3000/google-ads-dashboard?token=${token}`);
  }

  @Get('/ads-accounts')
  async getAdsAccounts(@Query('token') token: string) {
    return this.auth.getAdsAccounts(token);
  }
} 