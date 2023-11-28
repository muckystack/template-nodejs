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
exports.Diagnosis = void 0;
const openapi = require("@nestjs/swagger");
const doctor_entity_1 = require("../../doctors/entities/doctor.entity");
const document_entity_1 = require("../../documents/entities/document.entity");
const patient_entity_1 = require("../../patient/entities/patient.entity");
const timestamp_globalEntity_1 = require("../../../entities/timestamp.globalEntity");
const typeorm_1 = require("typeorm");
let Diagnosis = class Diagnosis extends timestamp_globalEntity_1.TimeStampEntity {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => Number }, observations: { required: true, type: () => String }, recipe: { required: true, type: () => String }, patient: { required: true, type: () => require("../../patient/entities/patient.entity").Patient }, doctor: { required: true, type: () => require("../../doctors/entities/doctor.entity").Doctor }, documents: { required: true, type: () => [require("../../documents/entities/document.entity").Document] } };
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], Diagnosis.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('text', { nullable: true }),
    __metadata("design:type", String)
], Diagnosis.prototype, "observations", void 0);
__decorate([
    (0, typeorm_1.Column)('text', { nullable: true }),
    __metadata("design:type", String)
], Diagnosis.prototype, "recipe", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => patient_entity_1.Patient, (patient) => patient.diagnosis, { eager: true }),
    __metadata("design:type", patient_entity_1.Patient)
], Diagnosis.prototype, "patient", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => doctor_entity_1.Doctor, (doctor) => doctor.diagnosis),
    __metadata("design:type", doctor_entity_1.Doctor)
], Diagnosis.prototype, "doctor", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => document_entity_1.Document, (document) => document.diagnosis),
    __metadata("design:type", Array)
], Diagnosis.prototype, "documents", void 0);
Diagnosis = __decorate([
    (0, typeorm_1.Entity)({ name: 'diagnosis' })
], Diagnosis);
exports.Diagnosis = Diagnosis;
//# sourceMappingURL=diagnosis.entity.js.map