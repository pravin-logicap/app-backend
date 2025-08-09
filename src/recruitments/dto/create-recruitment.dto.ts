import { IsIn, IsNotEmpty, IsOptional, IsUrl, IsISO8601 } from 'class-validator';

export class CreateRecruitmentDto {
  @IsNotEmpty({ message: 'Title is required' })
  title!: string;

  @IsOptional()
  department?: string;

  @IsOptional()
  @IsIn(['OPEN', 'CLOSED', 'UPCOMING'], { message: 'Status must be one of: OPEN, CLOSED, UPCOMING' })
  status?: 'OPEN' | 'CLOSED' | 'UPCOMING';

  @IsOptional()
  @IsUrl({}, { message: 'Apply URL must be a valid URL' })
  applyUrl?: string;

  @IsOptional()
  @IsISO8601({}, { message: 'Published date must be a valid ISO date (YYYY-MM-DD)' })
  publishedAt?: string;
} 