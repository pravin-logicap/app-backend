import { RecruitmentsService } from './recruitments.service';
import { CreateRecruitmentDto } from './dto/create-recruitment.dto';
export declare class RecruitmentsController {
    private readonly service;
    constructor(service: RecruitmentsService);
    list(): Promise<{
        id: any;
        title: string;
        department: string | undefined;
        status: import("./recruitment.schema").RecruitmentStatus;
        applyUrl: string | undefined;
        publishedAt: Date | undefined;
    }[]>;
    create(body: CreateRecruitmentDto): Promise<{
        id: any;
    }>;
}
