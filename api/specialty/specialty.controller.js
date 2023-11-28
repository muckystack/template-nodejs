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
exports.SpecialtyController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const specialty_service_1 = require("./specialty.service");
const create_specialty_dto_1 = require("./dto/create-specialty.dto");
const update_specialty_dto_1 = require("./dto/update-specialty.dto");
const swagger_1 = require("@nestjs/swagger");
let SpecialtyController = class SpecialtyController {
    constructor(specialtyService) {
        this.specialtyService = specialtyService;
    }
    create(createSpecialtyDto) {
        return this.specialtyService.create(createSpecialtyDto);
    }
    findAll() {
        return this.specialtyService.findAll();
    }
    findOne(id) {
        return this.specialtyService.findOne(+id);
    }
    update(id, updateSpecialtyDto) {
        return this.specialtyService.update(+id, updateSpecialtyDto);
    }
    remove(id) {
        return this.specialtyService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    openapi.ApiResponse({ status: 201, type: String }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_specialty_dto_1.CreateSpecialtyDto]),
    __metadata("design:returntype", void 0)
], SpecialtyController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    openapi.ApiResponse({ status: 200, type: String }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SpecialtyController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    openapi.ApiResponse({ status: 200, type: String }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SpecialtyController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    openapi.ApiResponse({ status: 200, type: String }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_specialty_dto_1.UpdateSpecialtyDto]),
    __metadata("design:returntype", void 0)
], SpecialtyController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    openapi.ApiResponse({ status: 200, type: String }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SpecialtyController.prototype, "remove", null);
SpecialtyController = __decorate([
    (0, swagger_1.ApiTags)('Speciality'),
    (0, common_1.Controller)('specialty'),
    __metadata("design:paramtypes", [specialty_service_1.SpecialtyService])
], SpecialtyController);
exports.SpecialtyController = SpecialtyController;
//# sourceMappingURL=specialty.controller.js.map