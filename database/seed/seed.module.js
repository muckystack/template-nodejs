"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SeedModule = void 0;
const common_1 = require("@nestjs/common");
const seed_service_1 = require("./seed.service");
const seed_controller_1 = require("./seed.controller");
const users_module_1 = require("../../api/users/users.module");
const users_service_1 = require("../../api/users/users.service");
const roles_module_1 = require("../../api/roles/roles.module");
const area_service_1 = require("../../api/area/area.service");
const area_module_1 = require("../../api/area/area.module");
const doctors_service_1 = require("../../api/doctors/doctors.service");
const doctors_module_1 = require("../../api/doctors/doctors.module");
const comments_service_1 = require("../../api/comments/comments.service");
const comments_module_1 = require("../../api/comments/comments.module");
const offices_service_1 = require("../../api/offices/offices.service");
const offices_module_1 = require("../../api/offices/offices.module");
const address_module_1 = require("../../api/address/address.module");
const address_service_1 = require("../../api/address/address.service");
const doctor_map_1 = require("../../api/doctors/mapper/doctor.map");
let SeedModule = class SeedModule {
};
SeedModule = __decorate([
    (0, common_1.Module)({
        controllers: [seed_controller_1.SeedController],
        providers: [
            seed_service_1.SeedService,
            users_service_1.UsersService,
            area_service_1.AreaService,
            doctors_service_1.DoctorsService,
            comments_service_1.CommentsService,
            offices_service_1.OfficesService,
            address_service_1.AddressService,
            doctor_map_1.DoctorsMapper,
        ],
        imports: [
            users_module_1.UsersModule,
            roles_module_1.RolesModule,
            area_module_1.AreaModule,
            doctors_module_1.DoctorsModule,
            comments_module_1.CommentsModule,
            offices_module_1.OfficesModule,
            address_module_1.AddressModule,
        ],
    })
], SeedModule);
exports.SeedModule = SeedModule;
//# sourceMappingURL=seed.module.js.map