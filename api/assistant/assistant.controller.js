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
exports.AssistantController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const assistant_service_1 = require("./assistant.service");
const create_assistant_dto_1 = require("./dto/create-assistant.dto");
const update_assistant_dto_1 = require("./dto/update-assistant.dto");
const pagination_dto_1 = require("../../common/dtos/pagination.dto");
const swagger_1 = require("@nestjs/swagger");
const interfaces_1 = require("../auth/interfaces");
const decorators_1 = require("../auth/decorators");
const passport_1 = require("@nestjs/passport");
const user_role_guard_1 = require("../auth/guards/user-role/user-role.guard");
const user_entity_1 = require("../users/entities/user.entity");
let AssistantController = class AssistantController {
    constructor(assistantService) {
        this.assistantService = assistantService;
    }
    create(createAssistantDto, user) {
        return this.assistantService.create(createAssistantDto, user);
    }
    findAll(query, user) {
        return this.assistantService.findAll(query, user);
    }
    findOne(id, user) {
        return this.assistantService.findOne(+id, user);
    }
    update(id, updateAssistantDto, user) {
        return this.assistantService.update(+id, updateAssistantDto, user);
    }
    remove(id, user) {
        return this.assistantService.remove(+id, user);
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
    __metadata("design:paramtypes", [create_assistant_dto_1.CreateAssistantDto,
        user_entity_1.User]),
    __metadata("design:returntype", void 0)
], AssistantController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)(), user_role_guard_1.UserRoleGuard),
    (0, decorators_1.RoleProtected)(interfaces_1.ValidRoles.DOCTOR),
    (0, swagger_1.ApiQuery)({ name: 'limit', type: Number, required: false, example: 10 }),
    (0, swagger_1.ApiQuery)({ name: 'page', type: Number, required: false, example: 1 }),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Query)(new common_1.ValidationPipe())),
    __param(1, (0, decorators_1.GetUserDecorator)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_dto_1.PaginationDto,
        user_entity_1.User]),
    __metadata("design:returntype", void 0)
], AssistantController.prototype, "findAll", null);
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
], AssistantController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)(), user_role_guard_1.UserRoleGuard),
    (0, decorators_1.RoleProtected)(interfaces_1.ValidRoles.DOCTOR),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, decorators_1.GetUserDecorator)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_assistant_dto_1.UpdateAssistantDto,
        user_entity_1.User]),
    __metadata("design:returntype", void 0)
], AssistantController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)(), user_role_guard_1.UserRoleGuard),
    (0, decorators_1.RoleProtected)(interfaces_1.ValidRoles.DOCTOR),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, decorators_1.GetUserDecorator)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, user_entity_1.User]),
    __metadata("design:returntype", void 0)
], AssistantController.prototype, "remove", null);
AssistantController = __decorate([
    (0, swagger_1.ApiTags)('Asistentes'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Controller)('assistant'),
    __metadata("design:paramtypes", [assistant_service_1.AssistantService])
], AssistantController);
exports.AssistantController = AssistantController;
//# sourceMappingURL=assistant.controller.js.map