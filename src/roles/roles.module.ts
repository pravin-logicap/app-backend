import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Role, RoleSchema } from './role.schema';
import { RolesService } from './roles.service';
import { RolesController } from './roles.controller';
import { RolesGuard } from './roles.guard';

@Module({
  imports: [MongooseModule.forFeature([{ name: Role.name, schema: RoleSchema }])],
  providers: [RolesService, RolesGuard],
  controllers: [RolesController],
  exports: [MongooseModule, RolesGuard],
})
export class RolesModule {} 