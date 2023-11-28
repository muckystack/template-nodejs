"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DoctorsModule = void 0;
const common_1 = require("@nestjs/common");
const doctors_service_1 = require("./doctors.service");
const doctors_controller_1 = require("./doctors.controller");
const doctor_entity_1 = require("./entities/doctor.entity");
const typeorm_1 = require("@nestjs/typeorm");
const users_module_1 = require("../users/users.module");
const users_service_1 = require("../users/users.service");
const user_entity_1 = require("../users/entities/user.entity");
const role_entity_1 = require("../roles/entities/role.entity");
const doctor_map_1 = require("./mapper/doctor.map");
const roles_module_1 = require("../roles/roles.module");
const auth_module_1 = require("../auth/auth.module");
let DoctorsModule = class DoctorsModule {
};
DoctorsModule = __decorate([
    (0, common_1.Module)({
        controllers: [doctors_controller_1.DoctorsController],
        providers: [doctors_service_1.DoctorsService, users_service_1.UsersService, doctor_map_1.DoctorsMapper],
        imports: [
            typeorm_1.TypeOrmModule.forFeature([doctor_entity_1.Doctor, user_entity_1.User, role_entity_1.Role]),
            users_module_1.UsersModule,
            roles_module_1.RolesModule,
            auth_module_1.AuthModule,
        ],
        exports: [doctors_service_1.DoctorsService, typeorm_1.TypeOrmModule],
    })
], DoctorsModule);
exports.DoctorsModule = DoctorsModule;
//# sourceMappingURL=doctors.module.js.map