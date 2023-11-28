"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatingHistoryModule = void 0;
const common_1 = require("@nestjs/common");
const dating_history_service_1 = require("./dating-history.service");
const dating_history_controller_1 = require("./dating-history.controller");
const typeorm_1 = require("@nestjs/typeorm");
const dating_history_entity_1 = require("./entities/dating-history.entity");
let DatingHistoryModule = class DatingHistoryModule {
};
DatingHistoryModule = __decorate([
    (0, common_1.Module)({
        controllers: [dating_history_controller_1.DatingHistoryController],
        providers: [dating_history_service_1.DatingHistoryService],
        imports: [typeorm_1.TypeOrmModule.forFeature([dating_history_entity_1.DatingHistory])],
        exports: [dating_history_service_1.DatingHistoryService, typeorm_1.TypeOrmModule],
    })
], DatingHistoryModule);
exports.DatingHistoryModule = DatingHistoryModule;
//# sourceMappingURL=dating-history.module.js.map