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
exports.Patient = void 0;
const openapi = require("@nestjs/swagger");
const appointment_entity_1 = require("../../appointment/entities/appointment.entity");
const dating_history_entity_1 = require("../../dating-history/entities/dating-history.entity");
const diagnosis_entity_1 = require("../../diagnosis/entities/diagnosis.entity");
const doctor_entity_1 = require("../../doctors/entities/doctor.entity");
const user_entity_1 = require("../../users/entities/user.entity");
const timestamp_globalEntity_1 = require("../../../entities/timestamp.globalEntity");
const typeorm_1 = require("typeorm");
let Patient = class Patient extends timestamp_globalEntity_1.TimeStampEntity {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => Number }, age: { required: true, type: () => Number }, height: { required: true, type: () => Number }, gender: { required: true, type: () => String }, address: { required: true, type: () => String }, guardianName: { required: true, type: () => String }, comment: { required: true, type: () => String }, getNotifications: { required: true, type: () => Boolean }, user: { required: true, type: () => require("../../users/entities/user.entity").User }, datingHistory: { required: true, type: () => require("../../dating-history/entities/dating-history.entity").DatingHistory }, appointment: { required: true, type: () => require("../../appointment/entities/appointment.entity").Appointment }, doctor: { required: true, type: () => require("../../doctors/entities/doctor.entity").Doctor }, diagnosis: { required: true, type: () => require("../../diagnosis/entities/diagnosis.entity").Diagnosis } };
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], Patient.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('integer', { default: 0 }),
    __metadata("design:type", Number)
], Patient.prototype, "age", void 0);
__decorate([
    (0, typeorm_1.Column)('float', { nullable: true }),
    __metadata("design:type", Number)
], Patient.prototype, "height", void 0);
__decorate([
    (0, typeorm_1.Column)('text'),
    __metadata("design:type", String)
], Patient.prototype, "gender", void 0);
__decorate([
    (0, typeorm_1.Column)('text'),
    __metadata("design:type", String)
], Patient.prototype, "address", void 0);
__decorate([
    (0, typeorm_1.Column)('text', { nullable: true }),
    __metadata("design:type", String)
], Patient.prototype, "guardianName", void 0);
__decorate([
    (0, typeorm_1.Column)('text', { nullable: true }),
    __metadata("design:type", String)
], Patient.prototype, "comment", void 0);
__decorate([
    (0, typeorm_1.Column)('boolean', { default: false }),
    __metadata("design:type", Boolean)
], Patient.prototype, "getNotifications", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => user_entity_1.User, (user) => user.patient, { eager: true }),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", user_entity_1.User)
], Patient.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => dating_history_entity_1.DatingHistory, (datingHistory) => datingHistory.patient),
    __metadata("design:type", dating_history_entity_1.DatingHistory)
], Patient.prototype, "datingHistory", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => appointment_entity_1.Appointment, (appointment) => appointment.patient),
    __metadata("design:type", appointment_entity_1.Appointment)
], Patient.prototype, "appointment", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => doctor_entity_1.Doctor, (doctor) => doctor.patient),
    __metadata("design:type", doctor_entity_1.Doctor)
], Patient.prototype, "doctor", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => diagnosis_entity_1.Diagnosis, (diagnosis) => diagnosis.patient, {
        cascade: true,
    }),
    __metadata("design:type", diagnosis_entity_1.Diagnosis)
], Patient.prototype, "diagnosis", void 0);
Patient = __decorate([
    (0, typeorm_1.Entity)({ name: 'patients' })
], Patient);
exports.Patient = Patient;
//# sourceMappingURL=patient.entity.js.map