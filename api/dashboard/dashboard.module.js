"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashboardModule = void 0;
const common_1 = require("@nestjs/common");
const dashboard_service_1 = require("./dashboard.service");
const dashboard_controller_1 = require("./dashboard.controller");
const typeorm_1 = require("@nestjs/typeorm");
const dashboard_entity_1 = require("./entities/dashboard.entity");
const auth_module_1 = require("../auth/auth.module");
const patient_entity_1 = require("../patient/entities/patient.entity");
const appointment_entity_1 = require("../appointment/entities/appointment.entity");
let DashboardModule = class DashboardModule {
};
DashboardModule = __decorate([
    (0, common_1.Module)({
        controllers: [dashboard_controller_1.DashboardController],
        providers: [dashboard_service_1.DashboardService],
        imports: [
            typeorm_1.TypeOrmModule.forFeature([dashboard_entity_1.Dashboard, patient_entity_1.Patient, appointment_entity_1.Appointment]),
            auth_module_1.AuthModule,
        ],
        exports: [typeorm_1.TypeOrmModule, dashboard_service_1.DashboardService],
    })
], DashboardModule);
exports.DashboardModule = DashboardModule;
//# sourceMappingURL=dashboard.module.js.map