"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FinanceModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const department_schema_1 = require("./schemas/department.schema");
const branch_schema_1 = require("./schemas/branch.schema");
const vendor_schema_1 = require("./schemas/vendor.schema");
const asset_schema_1 = require("./schemas/asset.schema");
const transaction_schema_1 = require("./schemas/transaction.schema");
const departments_controller_1 = require("./departments.controller");
const departments_service_1 = require("./departments.service");
const branches_controller_1 = require("./branches.controller");
const branches_service_1 = require("./branches.service");
const vendors_controller_1 = require("./vendors.controller");
const vendors_service_1 = require("./vendors.service");
const transactions_controller_1 = require("./transactions.controller");
const transactions_service_1 = require("./transactions.service");
const assets_controller_1 = require("./assets.controller");
const assets_service_1 = require("./assets.service");
const roles_module_1 = require("../roles/roles.module");
let FinanceModule = class FinanceModule {
};
exports.FinanceModule = FinanceModule;
exports.FinanceModule = FinanceModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: department_schema_1.Department.name, schema: department_schema_1.DepartmentSchema },
                { name: branch_schema_1.Branch.name, schema: branch_schema_1.BranchSchema },
                { name: vendor_schema_1.Vendor.name, schema: vendor_schema_1.VendorSchema },
                { name: asset_schema_1.Asset.name, schema: asset_schema_1.AssetSchema },
                { name: transaction_schema_1.Transaction.name, schema: transaction_schema_1.TransactionSchema },
            ]),
            roles_module_1.RolesModule,
        ],
        controllers: [departments_controller_1.DepartmentsController, branches_controller_1.BranchesController, vendors_controller_1.VendorsController, transactions_controller_1.TransactionsController, assets_controller_1.AssetsController],
        providers: [departments_service_1.DepartmentsService, branches_service_1.BranchesService, vendors_service_1.VendorsService, transactions_service_1.TransactionsService, assets_service_1.AssetsService],
        exports: [mongoose_1.MongooseModule],
    })
], FinanceModule);
//# sourceMappingURL=finance.module.js.map