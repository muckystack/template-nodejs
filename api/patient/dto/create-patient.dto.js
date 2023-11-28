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
exports.CreatePatientDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const create_general_user_dto_1 = require("../../users/dto/create-general-user.dto");
class CreatePatientDto extends create_general_user_dto_1.CreateGeneralUserDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { height: { required: true, type: () => Number }, address: { required: true, type: () => String }, guardianName: { required: true, type: () => String }, comment: { required: true, type: () => String }, getNotifications: { required: true, type: () => Boolean } };
    }
}
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({
        example: 1.72,
    }),
    __metadata("design:type", Number)
], CreatePatientDto.prototype, "height", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({
        example: 'Las lomas #4',
    }),
    __metadata("design:type", String)
], CreatePatientDto.prototype, "address", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({
        example: 'Juan perez',
    }),
    __metadata("design:type", String)
], CreatePatientDto.prototype, "guardianName", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({
        example: 'Comentario de Juan perez',
    }),
    __metadata("design:type", String)
], CreatePatientDto.prototype, "comment", void 0);
__decorate([
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({
        example: true,
    }),
    __metadata("design:type", Boolean)
], CreatePatientDto.prototype, "getNotifications", void 0);
exports.CreatePatientDto = CreatePatientDto;
//# sourceMappingURL=create-patient.dto.js.map