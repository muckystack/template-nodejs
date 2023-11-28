"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AssistantModule = void 0;
const common_1 = require("@nestjs/common");
const assistant_service_1 = require("./assistant.service");
const assistant_controller_1 = require("./assistant.controller");
const typeorm_1 = require("@nestjs/typeorm");
const assistant_entity_1 = require("./entities/assistant.entity");
const users_module_1 = require("../users/users.module");
const doctors_module_1 = require("../doctors/doctors.module");
const auth_module_1 = require("../auth/auth.module");
let AssistantModule = class AssistantModule {
};
AssistantModule = __decorate([
    (0, common_1.Module)({
        controllers: [assistant_controller_1.AssistantController],
        providers: [assistant_service_1.AssistantService],
        imports: [
            typeorm_1.TypeOrmModule.forFeature([assistant_entity_1.Assistant]),
            users_module_1.UsersModule,
            doctors_module_1.DoctorsModule,
            auth_module_1.AuthModule,
        ],
        exports: [typeorm_1.TypeOrmModule, assistant_service_1.AssistantService],
    })
], AssistantModule);
exports.AssistantModule = AssistantModule;
//# sourceMappingURL=assistant.module.js.map