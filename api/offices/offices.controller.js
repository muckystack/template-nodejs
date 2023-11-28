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
exports.OfficesController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const offices_service_1 = require("./offices.service");
const create_office_dto_1 = require("./dto/create-office.dto");
const update_office_dto_1 = require("./dto/update-office.dto");
const swagger_1 = require("@nestjs/swagger");
const passport_1 = require("@nestjs/passport");
const user_role_guard_1 = require("../auth/guards/user-role/user-role.guard");
const interfaces_1 = require("../auth/interfaces");
const decorators_1 = require("../auth/decorators");
const user_entity_1 = require("../users/entities/user.entity");
let OfficesController = class OfficesController {
    constructor(officesService) {
        this.officesService = officesService;
    }
    create(createOfficeDto, user) {
        return this.officesService.create(createOfficeDto, user);
    }
    findAll(user) {
        return this.officesService.findAll(user);
    }
    findOne(id, user) {
        return this.officesService.findOne(+id, user);
    }
    update(id, updateOfficeDto, user) {
        return this.officesService.update(+id, updateOfficeDto, user);
    }
    deleteOffice(id, user) {
        return this.officesService.deleteOffice(+id, user);
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)(), user_role_guard_1.UserRoleGuard),
    (0, decorators_1.RoleProtected)(interfaces_1.ValidRoles.DOCTOR),
    openapi.ApiResponse({ status: 201, type: require("./entities/office.entity").Office }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, decorators_1.GetUserDecorator)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_office_dto_1.CreateOfficeDto,
        user_entity_1.User]),
    __metadata("design:returntype", void 0)
], OfficesController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)(), user_role_guard_1.UserRoleGuard),
    (0, decorators_1.RoleProtected)(interfaces_1.ValidRoles.DOCTOR),
    openapi.ApiResponse({ status: 200, type: [require("./entities/office.entity").Office] }),
    __param(0, (0, decorators_1.GetUserDecorator)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.User]),
    __metadata("design:returntype", void 0)
], OfficesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)(), user_role_guard_1.UserRoleGuard),
    (0, decorators_1.RoleProtected)(interfaces_1.ValidRoles.DOCTOR),
    openapi.ApiResponse({ status: 200, type: require("./entities/office.entity").Office }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, decorators_1.GetUserDecorator)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, user_entity_1.User]),
    __metadata("design:returntype", void 0)
], OfficesController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)(), user_role_guard_1.UserRoleGuard),
    (0, decorators_1.RoleProtected)(interfaces_1.ValidRoles.DOCTOR),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, decorators_1.GetUserDecorator)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_office_dto_1.UpdateOfficeDto,
        user_entity_1.User]),
    __metadata("design:returntype", void 0)
], OfficesController.prototype, "update", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)(), user_role_guard_1.UserRoleGuard),
    (0, decorators_1.RoleProtected)(interfaces_1.ValidRoles.DOCTOR),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, decorators_1.GetUserDecorator)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, user_entity_1.User]),
    __metadata("design:returntype", void 0)
], OfficesController.prototype, "deleteOffice", null);
OfficesController = __decorate([
    (0, swagger_1.ApiTags)('Offices'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Controller)('offices'),
    __metadata("design:paramtypes", [offices_service_1.OfficesService])
], OfficesController);
exports.OfficesController = OfficesController;
//# sourceMappingURL=offices.controller.js.map