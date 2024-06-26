"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DoctorPatientsModule = void 0;
const common_1 = require("@nestjs/common");
const doctor_patients_service_1 = require("./doctor-patients.service");
const doctor_patients_controller_1 = require("./doctor-patients.controller");
const auth_module_1 = require("../auth/auth.module");
const users_module_1 = require("../users/users.module");
const patient_module_1 = require("../patient/patient.module");
let DoctorPatientsModule = class DoctorPatientsModule {
};
DoctorPatientsModule = __decorate([
    (0, common_1.Module)({
        controllers: [doctor_patients_controller_1.DoctorPatientsController],
        providers: [doctor_patients_service_1.DoctorPatientsService],
        imports: [auth_module_1.AuthModule, users_module_1.UsersModule, patient_module_1.PatientModule],
        exports: [doctor_patients_service_1.DoctorPatientsService],
    })
], DoctorPatientsModule);
exports.DoctorPatientsModule = DoctorPatientsModule;
//# sourceMappingURL=doctor-patients.module.js.map