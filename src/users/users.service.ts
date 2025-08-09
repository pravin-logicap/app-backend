import { Injectable, ConflictException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './user.schema';
import * as bcrypt from 'bcrypt';

export interface CreateUserInput {
  fullName: string;
  email: string;
  phone?: string;
  password: string;
}

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private readonly userModel: Model<User>) {}

  async createUser(input: CreateUserInput): Promise<User> {
    const existing = await this.userModel.findOne({ email: input.email.toLowerCase() }).exec();
    if (existing) throw new ConflictException('Email already registered');
    const passwordHash = await bcrypt.hash(input.password, 10);
    const user = new this.userModel({
      fullName: input.fullName,
      email: input.email.toLowerCase(),
      phone: input.phone,
      passwordHash,
    });
    return user.save();
  }

  async findByEmail(email: string): Promise<User | null> {
    return this.userModel.findOne({ email: email.toLowerCase() }).exec();
  }

  async validatePassword(user: User, password: string): Promise<boolean> {
    return bcrypt.compare(password, user.passwordHash);
  }
} 