export declare class PaginationDto {
    q?: string;
    offset?: number;
    limit?: number;
}
export declare class DateRangeDto extends PaginationDto {
    from?: string;
    to?: string;
}
