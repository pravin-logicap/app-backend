import { Body, Controller, Param, Post, UseGuards } from '@nestjs/common';
import { AssetsService } from './assets.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RolesGuard } from '../roles/roles.guard';
import { Permissions } from '../roles/roles.decorator';

@Controller('assets')
@UseGuards(JwtAuthGuard, RolesGuard)
export class AssetsController {
  constructor(private readonly service: AssetsService) {}

  @Post()
  @Permissions('asset:create')
  async create(@Body() body: any) {
    return this.service.create(body);
  }

  @Post(':assetId/link/:entityType/:entityId')
  @Permissions('asset:link')
  async link(
    @Param('assetId') assetId: string,
    @Param('entityType') entityType: 'EMPLOYEE'|'VENDOR'|'BRANCH'|'DEPARTMENT'|'TRANSACTION',
    @Param('entityId') entityId: string,
  ) {
    return this.service.linkTo({ entityType, entityId }, assetId);
  }

  @Post('presign')
  @Permissions('asset:presign')
  async presign(@Body() body: any) {
    return this.service.presignUpload(body);
  }
} 