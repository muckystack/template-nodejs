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
exports.Doctor = void 0;
const openapi = require("@nestjs/swagger");
const area_entity_1 = require("../../area/entities/area.entity");
const assistant_entity_1 = require("../../assistant/entities/assistant.entity");
const bank_data_entity_1 = require("../../bank-data/entities/bank-data.entity");
const comment_entity_1 = require("../../comments/entities/comment.entity");
const dating_history_entity_1 = require("../../dating-history/entities/dating-history.entity");
const diagnosis_entity_1 = require("../../diagnosis/entities/diagnosis.entity");
const office_entity_1 = require("../../offices/entities/office.entity");
const patient_entity_1 = require("../../patient/entities/patient.entity");
const user_entity_1 = require("../../users/entities/user.entity");
const typeorm_1 = require("typeorm");
let Doctor = class Doctor {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => Number }, professionalLicense: { required: true, type: () => String }, professionalProfile: { required: true, type: () => Object }, areas: { required: true, type: () => require("../../area/entities/area.entity").Area }, user: { required: true, type: () => require("../../users/entities/user.entity").User }, assistant: { required: true, type: () => require("../../assistant/entities/assistant.entity").Assistant }, comments: { required: true, type: () => [require("../../comments/entities/comment.entity").Comment] }, offices: { required: true, type: () => require("../../offices/entities/office.entity").Office }, datingHistory: { required: true, type: () => require("../../dating-history/entities/dating-history.entity").DatingHistory }, bankData: { required: true, type: () => require("../../bank-data/entities/bank-data.entity").BankData }, patient: { required: true, type: () => require("../../patient/entities/patient.entity").Patient }, diagnosis: { required: true, type: () => require("../../diagnosis/entities/diagnosis.entity").Diagnosis } };
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], Doctor.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('text'),
    __metadata("design:type", String)
], Doctor.prototype, "professionalLicense", void 0);
__decorate([
    (0, typeorm_1.Column)('text', { nullable: true }),
    __metadata("design:type", Object)
], Doctor.prototype, "professionalProfile", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => area_entity_1.Area, (area) => area.doctor),
    __metadata("design:type", area_entity_1.Area)
], Doctor.prototype, "areas", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => user_entity_1.User, (user) => user.doctor, { eager: true }),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", user_entity_1.User)
], Doctor.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => assistant_entity_1.Assistant, (assistant) => assistant.doctor),
    __metadata("design:type", assistant_entity_1.Assistant)
], Doctor.prototype, "assistant", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => comment_entity_1.Comment, (comment) => comment.doctor),
    __metadata("design:type", Array)
], Doctor.prototype, "comments", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => office_entity_1.Office, (office) => office.doctor),
    __metadata("design:type", office_entity_1.Office)
], Doctor.prototype, "offices", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => dating_history_entity_1.DatingHistory, (datingHistory) => datingHistory.doctor),
    __metadata("design:type", dating_history_entity_1.DatingHistory)
], Doctor.prototype, "datingHistory", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => bank_data_entity_1.BankData, (bankData) => bankData.doctor),
    __metadata("design:type", bank_data_entity_1.BankData)
], Doctor.prototype, "bankData", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => patient_entity_1.Patient, (doctorPatient) => doctorPatient.doctor),
    __metadata("design:type", patient_entity_1.Patient)
], Doctor.prototype, "patient", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => diagnosis_entity_1.Diagnosis, (diagnosis) => diagnosis.doctor),
    __metadata("design:type", diagnosis_entity_1.Diagnosis)
], Doctor.prototype, "diagnosis", void 0);
Doctor = __decorate([
    (0, typeorm_1.Entity)({ name: 'doctors' })
], Doctor);
exports.Doctor = Doctor;
//# sourceMappingURL=doctor.entity.js.map