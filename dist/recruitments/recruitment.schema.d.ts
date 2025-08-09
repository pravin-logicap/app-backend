import { Document } from 'mongoose';
export type RecruitmentStatus = 'OPEN' | 'CLOSED' | 'UPCOMING';
export declare class Recruitment extends Document {
    title: string;
    department?: string;
    status: RecruitmentStatus;
    applyUrl?: string;
    publishedAt?: Date;
}
export declare const RecruitmentSchema: import("mongoose").Schema<Recruitment, import("mongoose").Model<Recruitment, any, any, any, Document<unknown, any, Recruitment, any, {}> & Recruitment & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Recruitment, Document<unknown, {}, import("mongoose").FlatRecord<Recruitment>, {}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & import("mongoose").FlatRecord<Recruitment> & Required<{
    _id: unknown;
}> & {
    __v: number;
}>;
