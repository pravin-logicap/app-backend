import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Department, DepartmentSchema } from './schemas/department.schema';
import { Branch, BranchSchema } from './schemas/branch.schema';
import { Vendor, VendorSchema } from './schemas/vendor.schema';
import { Asset, AssetSchema } from './schemas/asset.schema';
import { Transaction, TransactionSchema } from './schemas/transaction.schema';
import { DepartmentsController } from './departments.controller';
import { DepartmentsService } from './departments.service';
import { BranchesController } from './branches.controller';
import { BranchesService } from './branches.service';
import { VendorsController } from './vendors.controller';
import { VendorsService } from './vendors.service';
import { TransactionsController } from './transactions.controller';
import { TransactionsService } from './transactions.service';
import { AssetsController } from './assets.controller';
import { AssetsService } from './assets.service';
import { RolesModule } from '../roles/roles.module';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Department.name, schema: DepartmentSchema },
      { name: Branch.name, schema: BranchSchema },
      { name: Vendor.name, schema: VendorSchema },
      { name: Asset.name, schema: AssetSchema },
      { name: Transaction.name, schema: TransactionSchema },
    ]),
    RolesModule,
  ],
  controllers: [DepartmentsController, BranchesController, VendorsController, TransactionsController, AssetsController],
  providers: [DepartmentsService, BranchesService, VendorsService, TransactionsService, AssetsService],
  exports: [MongooseModule],
})
export class FinanceModule {} 