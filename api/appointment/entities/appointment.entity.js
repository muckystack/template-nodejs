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
exports.Appointment = void 0;
const openapi = require("@nestjs/swagger");
const office_entity_1 = require("../../offices/entities/office.entity");
const patient_entity_1 = require("../../patient/entities/patient.entity");
const timestamp_globalEntity_1 = require("../../../entities/timestamp.globalEntity");
const typeorm_1 = require("typeorm");
let Appointment = class Appointment extends timestamp_globalEntity_1.TimeStampEntity {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => Number }, title: { required: true, type: () => String }, date: { required: true, type: () => Date }, start: { required: true, type: () => String }, end: { required: true, type: () => String }, office: { required: true, type: () => require("../../offices/entities/office.entity").Office }, patient: { required: true, type: () => require("../../patient/entities/patient.entity").Patient }, status: { required: true, type: () => String } };
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], Appointment.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('text'),
    __metadata("design:type", String)
], Appointment.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)('date'),
    __metadata("design:type", Date)
], Appointment.prototype, "date", void 0);
__decorate([
    (0, typeorm_1.Column)('text'),
    __metadata("design:type", String)
], Appointment.prototype, "start", void 0);
__decorate([
    (0, typeorm_1.Column)('text'),
    __metadata("design:type", String)
], Appointment.prototype, "end", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => office_entity_1.Office, (office) => office.schedules, { cascade: false }),
    __metadata("design:type", office_entity_1.Office)
], Appointment.prototype, "office", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => patient_entity_1.Patient, (patient) => patient.appointment),
    __metadata("design:type", patient_entity_1.Patient)
], Appointment.prototype, "patient", void 0);
__decorate([
    (0, typeorm_1.Column)('text', { default: 'active' }),
    __metadata("design:type", String)
], Appointment.prototype, "status", void 0);
Appointment = __decorate([
    (0, typeorm_1.Entity)({ name: 'appointment' })
], Appointment);
exports.Appointment = Appointment;
//# sourceMappingURL=appointment.entity.js.map