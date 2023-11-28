"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiagnosisModule = void 0;
const common_1 = require("@nestjs/common");
const diagnosis_service_1 = require("./diagnosis.service");
const diagnosis_controller_1 = require("./diagnosis.controller");
const typeorm_1 = require("@nestjs/typeorm");
const diagnosis_entity_1 = require("./entities/diagnosis.entity");
const auth_module_1 = require("../auth/auth.module");
const patient_module_1 = require("../patient/patient.module");
const documents_module_1 = require("../documents/documents.module");
let DiagnosisModule = class DiagnosisModule {
};
DiagnosisModule = __decorate([
    (0, common_1.Module)({
        controllers: [diagnosis_controller_1.DiagnosisController],
        providers: [diagnosis_service_1.DiagnosisService],
        imports: [
            typeorm_1.TypeOrmModule.forFeature([diagnosis_entity_1.Diagnosis]),
            auth_module_1.AuthModule,
            patient_module_1.PatientModule,
            documents_module_1.DocumentsModule,
        ],
        exports: [typeorm_1.TypeOrmModule, diagnosis_service_1.DiagnosisService],
    })
], DiagnosisModule);
exports.DiagnosisModule = DiagnosisModule;
//# sourceMappingURL=diagnosis.module.js.map