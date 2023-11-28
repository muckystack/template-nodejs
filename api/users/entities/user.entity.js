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
exports.User = void 0;
const openapi = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const assistant_entity_1 = require("../../assistant/entities/assistant.entity");
const doctor_entity_1 = require("../../doctors/entities/doctor.entity");
const patient_entity_1 = require("../../patient/entities/patient.entity");
const role_entity_1 = require("../../roles/entities/role.entity");
const typeorm_1 = require("typeorm");
let User = class User {
    checkFieldsBeforeInsert() {
        this.email = this.email.toLowerCase().trim();
    }
    checkFieldsBeforeUpdate() {
        this.email = this.email.toLowerCase().trim();
    }
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => Number }, name: { required: true, type: () => String }, email: { required: true, type: () => String }, lastName: { required: true, type: () => String }, motherLastName: { required: true, type: () => String }, birthdate: { required: true, type: () => String }, gender: { required: true, type: () => String, enum: ['Masculino', 'Femenino'] }, phone: { required: true, type: () => String }, password: { required: true, type: () => String }, image: { required: false, type: () => String }, isActive: { required: true, type: () => Boolean }, roles: { required: true, type: () => require("../../roles/entities/role.entity").Role }, doctor: { required: true, type: () => require("../../roles/entities/role.entity").Role }, assistant: { required: true, type: () => require("../../assistant/entities/assistant.entity").Assistant }, patient: { required: true, type: () => require("../../patient/entities/patient.entity").Patient } };
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], User.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('text'),
    __metadata("design:type", String)
], User.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)('text', { unique: true }),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)('text'),
    __metadata("design:type", String)
], User.prototype, "lastName", void 0);
__decorate([
    (0, typeorm_1.Column)('text'),
    __metadata("design:type", String)
], User.prototype, "motherLastName", void 0);
__decorate([
    (0, typeorm_1.Column)('date'),
    __metadata("design:type", String)
], User.prototype, "birthdate", void 0);
__decorate([
    (0, class_validator_1.IsIn)(['Masculino', 'Femenino']),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], User.prototype, "gender", void 0);
__decorate([
    (0, typeorm_1.Column)('text', { nullable: true }),
    __metadata("design:type", String)
], User.prototype, "phone", void 0);
__decorate([
    (0, typeorm_1.Column)('text', { select: false, nullable: true }),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.Column)('text', { nullable: true }),
    __metadata("design:type", String)
], User.prototype, "image", void 0);
__decorate([
    (0, typeorm_1.Column)('bool', {
        default: true,
    }),
    __metadata("design:type", Boolean)
], User.prototype, "isActive", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => role_entity_1.Role, (role) => role.user, { nullable: true }),
    __metadata("design:type", role_entity_1.Role)
], User.prototype, "roles", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => doctor_entity_1.Doctor, (doctor) => doctor.user),
    __metadata("design:type", role_entity_1.Role)
], User.prototype, "doctor", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => assistant_entity_1.Assistant, (assistant) => assistant.user),
    __metadata("design:type", assistant_entity_1.Assistant)
], User.prototype, "assistant", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => patient_entity_1.Patient, (patient) => patient.user),
    __metadata("design:type", patient_entity_1.Patient)
], User.prototype, "patient", void 0);
__decorate([
    (0, typeorm_1.BeforeInsert)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], User.prototype, "checkFieldsBeforeInsert", null);
__decorate([
    (0, typeorm_1.BeforeUpdate)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], User.prototype, "checkFieldsBeforeUpdate", null);
User = __decorate([
    (0, typeorm_1.Entity)({ name: 'users' })
], User);
exports.User = User;
//# sourceMappingURL=user.entity.js.map