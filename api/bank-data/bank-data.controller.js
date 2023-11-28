"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BankDataController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const bank_data_service_1 = require("./bank-data.service");
const create_bank_data_dto_1 = require("./dto/create-bank-data.dto");
const update_bank_data_dto_1 = require("./dto/update-bank-data.dto");
const swagger_1 = require("@nestjs/swagger");
const decorators_1 = require("../auth/decorators");
const passport_1 = require("@nestjs/passport");
const user_role_guard_1 = require("../auth/guards/user-role/user-role.guard");
const user_entity_1 = require("../users/entities/user.entity");
const interfaces_1 = require("../auth/interfaces");
let BankDataController = class BankDataController {
    constructor(bankDataService) {
        this.bankDataService = bankDataService;
    }
    create(CreateBankDataDto, user) {
        return this.bankDataService.create(CreateBankDataDto, user);
    }
    findAll(user) {
        return this.bankDataService.findAll(user);
    }
    findOne(id, user) {
        return this.bankDataService.findOne(+id, user);
    }
    update(id, UpdateBankDataDto) {
        return this.bankDataService.update(+id, UpdateBankDataDto);
    }
    remove(id, user) {
        return this.bankDataService.remove(+id, user);
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)(), user_role_guard_1.UserRoleGuard),
    (0, decorators_1.RoleProtected)(interfaces_1.ValidRoles.DOCTOR),
    openapi.ApiResponse({ status: 201, type: Object }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, decorators_1.GetUserDecorator)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_bank_data_dto_1.CreateBankDataDto,
        user_entity_1.User]),
    __metadata("design:returntype", void 0)
], BankDataController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)(), user_role_guard_1.UserRoleGuard),
    (0, decorators_1.RoleProtected)(interfaces_1.ValidRoles.DOCTOR),
    openapi.ApiResponse({ status: 200, type: [require("./entities/bank-data.entity").BankData] }),
    __param(0, (0, decorators_1.GetUserDecorator)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.User]),
    __metadata("design:returntype", void 0)
], BankDataController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)(), user_role_guard_1.UserRoleGuard),
    (0, decorators_1.RoleProtected)(interfaces_1.ValidRoles.DOCTOR),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, decorators_1.GetUserDecorator)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, user_entity_1.User]),
    __metadata("design:returntype", void 0)
], BankDataController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)(), user_role_guard_1.UserRoleGuard),
    (0, decorators_1.RoleProtected)(interfaces_1.ValidRoles.DOCTOR),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_bank_data_dto_1.UpdateBankDataDto]),
    __metadata("design:returntype", void 0)
], BankDataController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)(), user_role_guard_1.UserRoleGuard),
    (0, decorators_1.RoleProtected)(interfaces_1.ValidRoles.DOCTOR),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, decorators_1.GetUserDecorator)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, user_entity_1.User]),
    __metadata("design:returntype", void 0)
], BankDataController.prototype, "remove", null);
BankDataController = __decorate([
    (0, swagger_1.ApiTags)('Banck Data'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Controller)('bank-data'),
    __metadata("design:paramtypes", [bank_data_service_1.BankDataService])
], BankDataController);
exports.BankDataController = BankDataController;
//# sourceMappingURL=bank-data.controller.js.map