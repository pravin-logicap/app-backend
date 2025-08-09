export declare class CreateRecruitmentDto {
    title: string;
    department?: string;
    status?: 'OPEN' | 'CLOSED' | 'UPCOMING';
    applyUrl?: string;
    publishedAt?: string;
}
