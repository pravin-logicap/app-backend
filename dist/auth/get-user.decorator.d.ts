export interface AuthUser {
    userId: string;
    email: string;
}
export declare const GetUser: (...dataOrPipes: (import("@nestjs/common").PipeTransform<any, any> | import("@nestjs/common").Type<import("@nestjs/common").PipeTransform<any, any>> | keyof AuthUser | undefined)[]) => ParameterDecorator;
