import { Injectable, UnauthorizedException, ForbiddenException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { ConfigService } from '@nestjs/config';
const { OAuth2Client } = require('google-auth-library');

@Injectable()
export class AuthService {
  constructor(private readonly users: UsersService, private readonly jwt: JwtService, private readonly config: ConfigService) {}

  async register(dto: RegisterDto) {
    const user = await this.users.createUser(dto);
    /*const twilio = require('twilio');

     // Your Account SID and Auth Token from www.twilio.com/console
     const accountSid = this.config.get('TWILIO_SID');
     const authToken = this.config.get('TWILIO_PASS');

     // Create a Twilio client
     const client = new twilio(accountSid, authToken);

     // Send an SMS message
     client.messages
       .create({
         body: 'Hello, this is a test message from Twilio!',
         from: this.config.get('TWIILIO_FROM_MOB_NO'), // Your Twilio phone number
         to: dto.phone   // The recipient's phone number
       })
       .then((message: { sid: any; }) => console.log(`Message sent successfully with SID: ${message.sid}`))
       .catch((error: any) => console.error(`Failed to send message: ${error}`));
*/
    return { id: user.id, email: user.email };
  }

  async adLogin() {

    const clientId = this.config.get('GOOGLE_ADS_CLIENT_ID');
    const clientSecret = this.config.get('GOOGLE_ADS_CLIENT_SECRET');
    const refreshToken = this.config.get('GOOGLE_ADS_REFRESH_TOKEN');

    const customerId = this.config.get('GOOGLE_ADS_CUSTOMER_ID');

    
    const oauth2Client = new OAuth2Client(clientId, clientSecret, 'https://developers.google.com/oauthplayground');
    oauth2Client.setCredentials({ refresh_token: refreshToken });

    const accessToken = await oauth2Client.getAccessToken();
    return { message: 'Ad Login' };
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

  async getGoogleAdsAuthUrl() {
    const clientId = this.config.get('GOOGLE_ADS_CLIENT_ID');
    const clientSecret = this.config.get('GOOGLE_ADS_CLIENT_SECRET');
    const redirectUri = this.config.get('GOOGLE_ADS_REDIRECT_URI');
    const { OAuth2Client } = require('google-auth-library');
    const oauth2Client = new OAuth2Client(clientId, clientSecret, redirectUri);
    const scopes = [
      'https://www.googleapis.com/auth/adwords',
      'openid',
      'email',
      'profile',
    ];
    const url = oauth2Client.generateAuthUrl({
      access_type: 'offline',
      prompt: 'consent',
      scope: scopes,
    });
    return { url };
  }

  async handleGoogleAdsCallback(code: string) {
    const clientId = this.config.get('GOOGLE_ADS_CLIENT_ID');
    const clientSecret = this.config.get('GOOGLE_ADS_CLIENT_SECRET');
    const redirectUri = this.config.get('GOOGLE_ADS_REDIRECT_URI');
    const { OAuth2Client } = require('google-auth-library');
    const oauth2Client = new OAuth2Client(clientId, clientSecret, redirectUri);
    const { tokens } = await oauth2Client.getToken(code);
    // TODO: Store tokens in DB associated with the user
    console.log(tokens);
    return tokens;
  }

  async getAdsAccounts(token: string) {
    console.log(token);
    const res = await fetch(`https://googleads.googleapis.com/v15/customers:listAccessibleCustomers`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
        'developer-token': this.config.get('GOOGLE_ADS_DEVELOPER_TOKEN')
      } as Record<string, string>
    });
  
    const data = await res.json();
    console.log(res);
    return res//.resourceNames;    

  }
} 