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
exports.Office = void 0;
const openapi = require("@nestjs/swagger");
const address_entity_1 = require("../../address/entities/address.entity");
const appointment_entity_1 = require("../../appointment/entities/appointment.entity");
const doctor_entity_1 = require("../../doctors/entities/doctor.entity");
const schedule_entity_1 = require("../../schedules/entities/schedule.entity");
const typeorm_1 = require("typeorm");
let Office = class Office {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => Number }, name: { required: true, type: () => String }, photo: { required: true, type: () => String }, slotMinTime: { required: true, type: () => String }, slotMaxTime: { required: true, type: () => String }, status: { required: true, type: () => String }, doctor: { required: true, type: () => require("../../doctors/entities/doctor.entity").Doctor }, schedules: { required: true, type: () => require("../../schedules/entities/schedule.entity").Schedule }, appointment: { required: true, type: () => require("../../appointment/entities/appointment.entity").Appointment }, address: { required: true, type: () => require("../../address/entities/address.entity").Address } };
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], Office.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('text'),
    __metadata("design:type", String)
], Office.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)('text'),
    __metadata("design:type", String)
], Office.prototype, "photo", void 0);
__decorate([
    (0, typeorm_1.Column)('time'),
    __metadata("design:type", String)
], Office.prototype, "slotMinTime", void 0);
__decorate([
    (0, typeorm_1.Column)('time'),
    __metadata("design:type", String)
], Office.prototype, "slotMaxTime", void 0);
__decorate([
    (0, typeorm_1.Column)('text', { default: 'active' }),
    __metadata("design:type", String)
], Office.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => doctor_entity_1.Doctor, (doctor) => doctor.offices),
    __metadata("design:type", doctor_entity_1.Doctor)
], Office.prototype, "doctor", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => schedule_entity_1.Schedule, (doctor) => doctor.office),
    __metadata("design:type", schedule_entity_1.Schedule)
], Office.prototype, "schedules", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => appointment_entity_1.Appointment, (appointment) => appointment.office),
    __metadata("design:type", appointment_entity_1.Appointment)
], Office.prototype, "appointment", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => address_entity_1.Address, (address) => address.office),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", address_entity_1.Address)
], Office.prototype, "address", void 0);
Office = __decorate([
    (0, typeorm_1.Entity)({ name: 'offices' })
], Office);
exports.Office = Office;
//# sourceMappingURL=office.entity.js.map