import { Model } from 'mongoose';
import { Recruitment } from './recruitment.schema';
export interface CreateRecruitmentInput {
    title: string;
    department?: string;
    status?: 'OPEN' | 'CLOSED' | 'UPCOMING';
    applyUrl?: string;
    publishedAt?: Date;
}
export declare class RecruitmentsService {
    private readonly model;
    constructor(model: Model<Recruitment>);
    listAll(): Promise<Recruitment[]>;
    create(input: CreateRecruitmentInput): Promise<Recruitment>;
}
