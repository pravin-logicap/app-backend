import { IsString, IsOptional, IsIn, IsNumber, IsArray, IsISO8601, IsNotEmpty } from 'class-validator';

export class CreateSalaryDto {
  @IsString() @IsNotEmpty()
  employeeId!: string;

  @IsNumber()
  amountInMinor!: number;

  @IsIn(['CASH','UPI_PHONEPE','UPI_GPAY','UPI_OTHER','BANK_TRANSFER','CHEQUE','OTHER'])
  method!: string;

  @IsOptional() @IsString()
  branchId?: string;

  @IsOptional() @IsString()
  departmentId?: string;

  @IsOptional() @IsString()
  referenceNo?: string;

  @IsOptional() @IsString()
  note?: string;

  @IsOptional() @IsArray()
  assetIds?: string[];

  @IsOptional() @IsISO8601()
  date?: string;
}

export class CreateAdvanceIssueDto {
  @IsString() @IsNotEmpty()
  employeeId!: string;

  @IsNumber()
  amountInMinor!: number;

  @IsIn(['CASH','UPI_PHONEPE','UPI_GPAY','UPI_OTHER','BANK_TRANSFER','CHEQUE','OTHER'])
  method!: string;

  @IsOptional() @IsString()
  referenceNo?: string;

  @IsOptional() @IsString()
  note?: string;

  @IsOptional() @IsArray()
  assetIds?: string[];

  @IsOptional() @IsISO8601()
  date?: string;
}

export class CreateAdvanceSettleDto extends CreateAdvanceIssueDto {
  @IsOptional() @IsString()
  settleAgainstTxnId?: string;
}

export class CreateVendorPaymentDto {
  @IsString() @IsNotEmpty()
  vendorId!: string;

  @IsNumber()
  amountInMinor!: number;

  @IsIn(['CASH','UPI_PHONEPE','UPI_GPAY','UPI_OTHER','BANK_TRANSFER','CHEQUE','OTHER'])
  method!: string;

  @IsOptional() @IsString()
  branchId?: string;

  @IsOptional() @IsString()
  departmentId?: string;

  @IsOptional() @IsString()
  referenceNo?: string;

  @IsOptional() @IsString()
  note?: string;

  @IsOptional() @IsArray()
  assetIds?: string[];

  @IsOptional() @IsISO8601()
  date?: string;
}

export class PresignDto {
  @IsString()
  contentType!: string;

  @IsOptional() @IsString()
  keyHint?: string;
} 