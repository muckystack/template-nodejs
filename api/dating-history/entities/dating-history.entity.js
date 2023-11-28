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
exports.DatingHistory = void 0;
const openapi = require("@nestjs/swagger");
const doctor_entity_1 = require("../../doctors/entities/doctor.entity");
const patient_entity_1 = require("../../patient/entities/patient.entity");
const schedule_entity_1 = require("../../schedules/entities/schedule.entity");
const typeorm_1 = require("typeorm");
let DatingHistory = class DatingHistory {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => Number }, init: { required: true, type: () => Date }, end: { required: true, type: () => Date }, patient: { required: true, type: () => require("../../patient/entities/patient.entity").Patient }, doctor: { required: true, type: () => require("../../patient/entities/patient.entity").Patient }, schedule: { required: true, type: () => require("../../schedules/entities/schedule.entity").Schedule }, createdAt: { required: true, type: () => Date } };
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], DatingHistory.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('date'),
    __metadata("design:type", Date)
], DatingHistory.prototype, "init", void 0);
__decorate([
    (0, typeorm_1.Column)('date'),
    __metadata("design:type", Date)
], DatingHistory.prototype, "end", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => patient_entity_1.Patient, (patient) => patient.datingHistory),
    __metadata("design:type", patient_entity_1.Patient)
], DatingHistory.prototype, "patient", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => doctor_entity_1.Doctor, (doctor) => doctor.datingHistory),
    __metadata("design:type", patient_entity_1.Patient)
], DatingHistory.prototype, "doctor", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => schedule_entity_1.Schedule, (schedule) => schedule.datingHistory),
    __metadata("design:type", schedule_entity_1.Schedule)
], DatingHistory.prototype, "schedule", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp'),
    __metadata("design:type", Date)
], DatingHistory.prototype, "createdAt", void 0);
DatingHistory = __decorate([
    (0, typeorm_1.Entity)({ name: 'datingHistorys' })
], DatingHistory);
exports.DatingHistory = DatingHistory;
//# sourceMappingURL=dating-history.entity.js.map