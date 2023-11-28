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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AreaController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const area_service_1 = require("./area.service");
const swagger_1 = require("@nestjs/swagger");
let AreaController = class AreaController {
    constructor(_areaService) {
        this._areaService = _areaService;
    }
    async getAreas() {
        return this._areaService.findAll();
    }
};
__decorate([
    (0, common_1.Get)(),
    openapi.ApiResponse({ status: 200, type: [require("./entities/area.entity").Area] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AreaController.prototype, "getAreas", null);
AreaController = __decorate([
    (0, swagger_1.ApiTags)('Area'),
    (0, common_1.Controller)('area'),
    __metadata("design:paramtypes", [area_service_1.AreaService])
], AreaController);
exports.AreaController = AreaController;
//# sourceMappingURL=area.controller.js.map