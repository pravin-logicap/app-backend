import { IsOptional, IsString, IsInt, Min, IsISO8601 } from 'class-validator';
import { Type } from 'class-transformer';

export class PaginationDto {
  @IsOptional() @IsString()
  q?: string;

  @IsOptional() @Type(() => Number) @IsInt() @Min(0)
  offset?: number;

  @IsOptional() @Type(() => Number) @IsInt() @Min(1)
  limit?: number;
}

export class DateRangeDto extends PaginationDto {
  @IsOptional() @IsISO8601()
  from?: string;

  @IsOptional() @IsISO8601()
  to?: string;
} 