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
exports.CreateGeneralUserDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateGeneralUserDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { name: { required: true, type: () => String, minLength: 1 }, email: { required: true, type: () => String }, lastName: { required: true, type: () => String, minLength: 1 }, motherLastName: { required: true, type: () => String, minLength: 1 }, birthdate: { required: true, type: () => String }, gender: { required: true, type: () => String }, phone: { required: true, type: () => String } };
    }
}
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(1),
    (0, swagger_1.ApiProperty)({
        example: 'Gustavo',
    }),
    __metadata("design:type", String)
], CreateGeneralUserDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsEmail)(),
    (0, swagger_1.ApiProperty)({
        example: 'gustavo_prueba@gmail.com',
    }),
    __metadata("design:type", String)
], CreateGeneralUserDto.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(1),
    (0, swagger_1.ApiProperty)({
        example: 'Lopez',
    }),
    __metadata("design:type", String)
], CreateGeneralUserDto.prototype, "lastName", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(1),
    (0, swagger_1.ApiProperty)({
        example: 'Rojas',
    }),
    __metadata("design:type", String)
], CreateGeneralUserDto.prototype, "motherLastName", void 0);
__decorate([
    (0, class_validator_1.IsDateString)(),
    (0, swagger_1.ApiProperty)({
        example: '1999-01-01',
    }),
    __metadata("design:type", String)
], CreateGeneralUserDto.prototype, "birthdate", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({
        example: 'Masculino',
    }),
    __metadata("design:type", String)
], CreateGeneralUserDto.prototype, "gender", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({
        example: '1234567890',
    }),
    __metadata("design:type", String)
], CreateGeneralUserDto.prototype, "phone", void 0);
exports.CreateGeneralUserDto = CreateGeneralUserDto;
//# sourceMappingURL=create-general-user.dto.js.map