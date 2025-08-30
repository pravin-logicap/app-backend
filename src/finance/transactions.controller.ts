import { Body, Controller, Get, Param, Post, Query, UseGuards } from '@nestjs/common';
import { TransactionsService } from './transactions.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RolesGuard } from '../roles/roles.guard';
import { Permissions } from '../roles/roles.decorator';
import { CreateAdvanceIssueDto, CreateAdvanceSettleDto, CreateSalaryDto, CreateVendorPaymentDto } from './dto/transactions.dto';
import { ApiBearerAuth, ApiBody, ApiOperation, ApiParam, ApiQuery, ApiTags } from '@nestjs/swagger';
import { DateRangeDto } from './dto/common.dto';

@ApiTags('Transactions')
@ApiBearerAuth('JWT')
@Controller('transactions')
@UseGuards(JwtAuthGuard, RolesGuard)
export class TransactionsController {
  constructor(private readonly service: TransactionsService) {}

  @Post('salary')
  @ApiOperation({ summary: 'Create salary payment for an employee' })
  @ApiBody({ type: CreateSalaryDto })
  @Permissions('txn:salary')
  async salary(@Body() body: CreateSalaryDto) {
    const { method, ...rest } = body as any;
    return this.service.createSalary({ ...rest, method: method as any, date: body.date ? new Date(body.date) : undefined });
  }

  @Post('advance-issue')
  @ApiOperation({ summary: 'Issue advance to an employee' })
  @ApiBody({ type: CreateAdvanceIssueDto })
  @Permissions('txn:advance')
  async advanceIssue(@Body() body: CreateAdvanceIssueDto) {
    const { method, ...rest } = body as any;
    return this.service.createAdvanceIssue({ ...rest, method: method as any, date: body.date ? new Date(body.date) : undefined });
  }

  @Post('advance-settle')
  @ApiOperation({ summary: 'Settle employee advance (reduce balance)' })
  @ApiBody({ type: CreateAdvanceSettleDto })
  @Permissions('txn:advance')
  async advanceSettle(@Body() body: CreateAdvanceSettleDto) {
    const { method, ...rest } = body as any;
    return this.service.createAdvanceSettle({ ...rest, method: method as any, date: body.date ? new Date(body.date) : undefined });
  }

  @Post('vendor-payment')
  @ApiOperation({ summary: 'Pay a vendor' })
  @ApiBody({ type: CreateVendorPaymentDto })
  @Permissions('txn:vendor')
  async vendorPayment(@Body() body: CreateVendorPaymentDto) {
    const { method, ...rest } = body as any;
    return this.service.createVendorPayment({ ...rest, method: method as any, date: body.date ? new Date(body.date) : undefined });
  }

  @Get('by-employee/:employeeId')
  @ApiOperation({ summary: 'List transactions by employee' })
  @ApiParam({ name: 'employeeId', type: String })
  @ApiQuery({ name: 'from', required: false })
  @ApiQuery({ name: 'to', required: false })
  @ApiQuery({ name: 'limit', required: false })
  @ApiQuery({ name: 'offset', required: false })
  async listByEmployee(@Param('employeeId') employeeId: string, @Query() q: DateRangeDto) {
    return this.service.listByEmployee(employeeId, q);
  }

  @Get('by-vendor/:vendorId')
  @ApiOperation({ summary: 'List transactions by vendor' })
  @ApiParam({ name: 'vendorId', type: String })
  @ApiQuery({ name: 'from', required: false })
  @ApiQuery({ name: 'to', required: false })
  @ApiQuery({ name: 'limit', required: false })
  @ApiQuery({ name: 'offset', required: false })
  async listByVendor(@Param('vendorId') vendorId: string, @Query() q: DateRangeDto) {
    return this.service.listByVendor(vendorId, q);
  }

  @Get('employee-balance/:employeeId')
  @ApiOperation({ summary: 'Get employee advance/salary balance summary' })
  @ApiParam({ name: 'employeeId', type: String })
  async employeeBalance(@Param('employeeId') employeeId: string) {
    return this.service.employeeBalance(employeeId);
  }

  @Get('vendor-total/:vendorId')
  @ApiOperation({ summary: 'Get vendor total paid' })
  @ApiParam({ name: 'vendorId', type: String })
  async vendorTotal(@Param('vendorId') vendorId: string) {
    return this.service.vendorTotalPaid(vendorId);
  }
} 