import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { RecruitmentsService } from './recruitments.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { CreateRecruitmentDto } from './dto/create-recruitment.dto';
import { RolesGuard } from '../roles/roles.guard';
import { Permissions } from '../roles/roles.decorator';

@Controller('recruitments')
export class RecruitmentsController {
  constructor(private readonly service: RecruitmentsService) {}

  @Get()
  @UseGuards(JwtAuthGuard)
  async list() {
    const items = await this.service.listAll();
    return items.map((r) => ({
      id: r.id,
      title: r.title,
      department: r.department,
      status: r.status,
      applyUrl: r.applyUrl,
      publishedAt: r.publishedAt,
    }));
  }

  @Post()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Permissions('recruitments:create')
  async create(@Body() body: CreateRecruitmentDto) {
    const created = await this.service.create({
      title: body.title,
      department: body.department,
      status: body.status,
      applyUrl: body.applyUrl,
      publishedAt: body.publishedAt ? new Date(body.publishedAt) : undefined,
    });
    return { id: created.id };
  }
} 