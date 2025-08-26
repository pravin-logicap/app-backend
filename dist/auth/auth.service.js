"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("../users/users.service");
const jwt_1 = require("@nestjs/jwt");
const config_1 = require("@nestjs/config");
const { OAuth2Client } = require('google-auth-library');
let AuthService = class AuthService {
    users;
    jwt;
    config;
    constructor(users, jwt, config) {
        this.users = users;
        this.jwt = jwt;
        this.config = config;
    }
    async register(dto) {
        const user = await this.users.createUser(dto);
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
    async login(dto) {
        const user = await this.users.findByEmail(dto.email);
        if (!user)
            throw new common_1.UnauthorizedException('Invalid credentials');
        const isValid = await this.users.validatePassword(user, dto.password);
        if (!isValid)
            throw new common_1.UnauthorizedException('Invalid credentials');
        const token = await this.jwt.signAsync({ sub: user.id, email: user.email, isAdmin: user.isAdmin, roleId: user.roleId });
        return { token };
    }
    async adminLogin(dto) {
        const user = await this.users.findByEmail(dto.email);
        if (!user)
            throw new common_1.UnauthorizedException('Invalid credentials');
        const isValid = await this.users.validatePassword(user, dto.password);
        if (!isValid)
            throw new common_1.UnauthorizedException('Invalid credentials');
        if (!user.isAdmin)
            throw new common_1.ForbiddenException('Admin access required');
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
    async handleGoogleAdsCallback(code) {
        const clientId = this.config.get('GOOGLE_ADS_CLIENT_ID');
        const clientSecret = this.config.get('GOOGLE_ADS_CLIENT_SECRET');
        const redirectUri = this.config.get('GOOGLE_ADS_REDIRECT_URI');
        const { OAuth2Client } = require('google-auth-library');
        const oauth2Client = new OAuth2Client(clientId, clientSecret, redirectUri);
        const { tokens } = await oauth2Client.getToken(code);
        console.log(tokens);
        return tokens;
    }
    async getAdsAccounts(token) {
        console.log(token);
        const res = await fetch(`https://googleads.googleapis.com/v15/customers:listAccessibleCustomers`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
                'developer-token': this.config.get('GOOGLE_ADS_DEVELOPER_TOKEN')
            }
        });
        const data = await res.json();
        console.log(res);
        return res;
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [users_service_1.UsersService, jwt_1.JwtService, config_1.ConfigService])
], AuthService);
//# sourceMappingURL=auth.service.js.map