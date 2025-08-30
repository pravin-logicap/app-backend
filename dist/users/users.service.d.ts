import { Model } from 'mongoose';
import { User } from './user.schema';
export interface CreateUserInput {
    fullName: string;
    email: string;
    phone?: string;
    password: string;
    roleId?: string;
    isAdmin?: boolean;
}
export declare class UsersService {
    private readonly userModel;
    constructor(userModel: Model<User>);
    createUser(input: CreateUserInput): Promise<User>;
    findByEmail(email: string): Promise<User | null>;
    validatePassword(user: User, password: string): Promise<boolean>;
}
