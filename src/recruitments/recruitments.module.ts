import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Recruitment, RecruitmentSchema } from './recruitment.schema';
import { RecruitmentsController } from './recruitments.controller';
import { RecruitmentsService } from './recruitments.service';
import { RolesModule } from '../roles/roles.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Recruitment.name, schema: RecruitmentSchema }]),
    RolesModule,
  ],
  controllers: [RecruitmentsController],
  providers: [RecruitmentsService],
})
export class RecruitmentsModule {} 