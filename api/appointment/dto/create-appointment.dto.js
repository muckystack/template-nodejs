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
exports.CreateAppointmentDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const office_entity_1 = require("../../offices/entities/office.entity");
const patient_entity_1 = require("../../patient/entities/patient.entity");
class CreateAppointmentDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { title: { required: true, type: () => String }, date: { required: true, type: () => Date }, start: { required: true, type: () => String }, end: { required: true, type: () => String }, office: { required: true, type: () => require("../../offices/entities/office.entity").Office, minimum: 1 }, patient: { required: true, type: () => require("../../patient/entities/patient.entity").Patient, minimum: 1 }, status: { required: true, type: () => String } };
    }
}
__decorate([
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({
        example: 'Titulo',
    }),
    __metadata("design:type", String)
], CreateAppointmentDto.prototype, "title", void 0);
__decorate([
    (0, class_validator_1.IsDateString)(),
    (0, swagger_1.ApiProperty)({
        example: '1999-01-01',
    }),
    __metadata("design:type", Date)
], CreateAppointmentDto.prototype, "date", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({
        example: '03:00:00',
    }),
    __metadata("design:type", String)
], CreateAppointmentDto.prototype, "start", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({
        example: '03:30:00',
    }),
    __metadata("design:type", String)
], CreateAppointmentDto.prototype, "end", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsPositive)(),
    (0, swagger_1.ApiProperty)({
        example: 1,
    }),
    __metadata("design:type", office_entity_1.Office)
], CreateAppointmentDto.prototype, "office", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsPositive)(),
    (0, swagger_1.ApiProperty)({
        example: 1,
    }),
    __metadata("design:type", patient_entity_1.Patient)
], CreateAppointmentDto.prototype, "patient", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({
        example: 'active',
    }),
    __metadata("design:type", String)
], CreateAppointmentDto.prototype, "status", void 0);
exports.CreateAppointmentDto = CreateAppointmentDto;
//# sourceMappingURL=create-appointment.dto.js.map