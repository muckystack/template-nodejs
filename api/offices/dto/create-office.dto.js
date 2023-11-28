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
exports.CreateOfficeDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const create_address_dto_1 = require("../../address/dto/create-address.dto");
class CreateOfficeDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { address: { required: true, type: () => require("../../address/dto/create-address.dto").CreateAddressDto }, name: { required: true, type: () => String, minLength: 2 }, photo: { required: true, type: () => String }, slotMinTime: { required: true, type: () => String }, slotMaxTime: { required: true, type: () => String } };
    }
}
__decorate([
    (0, class_validator_1.IsObject)(),
    __metadata("design:type", create_address_dto_1.CreateAddressDto)
], CreateOfficeDto.prototype, "address", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(2),
    (0, swagger_1.ApiProperty)({
        example: 'Nombre oficina',
    }),
    __metadata("design:type", String)
], CreateOfficeDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({
        example: 'base 64...',
    }),
    __metadata("design:type", String)
], CreateOfficeDto.prototype, "photo", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({
        example: '9:00:00',
    }),
    __metadata("design:type", String)
], CreateOfficeDto.prototype, "slotMinTime", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({
        example: '20:00:00',
    }),
    __metadata("design:type", String)
], CreateOfficeDto.prototype, "slotMaxTime", void 0);
exports.CreateOfficeDto = CreateOfficeDto;
//# sourceMappingURL=create-office.dto.js.map