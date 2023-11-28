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
exports.CreateDoctorDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const create_user_dto_1 = require("../../users/dto/create-user.dto");
class CreateDoctorDto extends create_user_dto_1.CreateUserDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { professionalLicense: { required: false, type: () => String }, professionalProfile: { required: true, type: () => Object } };
    }
}
__decorate([
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({
        example: '123456',
    }),
    __metadata("design:type", String)
], CreateDoctorDto.prototype, "professionalLicense", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({
        example: 'Es un ortodoncista altamente capacitado y experimentado, que se dedica a mejorar la salud dental y la estética de sus pacientes a través de la corrección de problemas de mordida y alineamiento dental.',
    }),
    __metadata("design:type", Object)
], CreateDoctorDto.prototype, "professionalProfile", void 0);
exports.CreateDoctorDto = CreateDoctorDto;
//# sourceMappingURL=create-doctor.dto.js.map