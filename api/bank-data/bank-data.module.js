"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BankDataModule = void 0;
const common_1 = require("@nestjs/common");
const bank_data_service_1 = require("./bank-data.service");
const bank_data_controller_1 = require("./bank-data.controller");
const typeorm_1 = require("@nestjs/typeorm");
const bank_data_entity_1 = require("./entities/bank-data.entity");
const auth_module_1 = require("../auth/auth.module");
let BankDataModule = class BankDataModule {
};
BankDataModule = __decorate([
    (0, common_1.Module)({
        controllers: [bank_data_controller_1.BankDataController],
        providers: [bank_data_service_1.BankDataService],
        imports: [typeorm_1.TypeOrmModule.forFeature([bank_data_entity_1.BankData]), auth_module_1.AuthModule],
        exports: [bank_data_service_1.BankDataService, typeorm_1.TypeOrmModule],
    })
], BankDataModule);
exports.BankDataModule = BankDataModule;
//# sourceMappingURL=bank-data.module.js.map