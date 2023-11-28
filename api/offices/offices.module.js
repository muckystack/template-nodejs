"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OfficesModule = void 0;
const common_1 = require("@nestjs/common");
const offices_service_1 = require("./offices.service");
const offices_controller_1 = require("./offices.controller");
const typeorm_1 = require("@nestjs/typeorm");
const office_entity_1 = require("./entities/office.entity");
const auth_module_1 = require("../auth/auth.module");
const address_entity_1 = require("../address/entities/address.entity");
let OfficesModule = class OfficesModule {
};
OfficesModule = __decorate([
    (0, common_1.Module)({
        controllers: [offices_controller_1.OfficesController],
        providers: [offices_service_1.OfficesService],
        imports: [typeorm_1.TypeOrmModule.forFeature([office_entity_1.Office, address_entity_1.Address]), auth_module_1.AuthModule],
        exports: [offices_service_1.OfficesService, typeorm_1.TypeOrmModule],
    })
], OfficesModule);
exports.OfficesModule = OfficesModule;
//# sourceMappingURL=offices.module.js.map