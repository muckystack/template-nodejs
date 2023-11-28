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
exports.CreateAddressDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateAddressDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { city: { required: true, type: () => String, minLength: 2 }, state: { required: true, type: () => String, minLength: 2 }, cologne: { required: true, type: () => String, minLength: 2 }, street: { required: true, type: () => String, minLength: 2 }, outdoorNumber: { required: true, type: () => String, minLength: 1 }, interiorNumber: { required: true, type: () => String, minLength: 1 }, floor: { required: true, type: () => String, minLength: 1 }, cp: { required: true, type: () => Number, minimum: 1, minLength: 5 }, reference: { required: true, type: () => String, minLength: 10 }, long: { required: true, type: () => Number }, lat: { required: true, type: () => Number } };
    }
}
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(2),
    (0, swagger_1.ApiProperty)({
        example: 'Ciudad',
    }),
    __metadata("design:type", String)
], CreateAddressDto.prototype, "city", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(2),
    (0, swagger_1.ApiProperty)({
        example: 'Estado',
    }),
    __metadata("design:type", String)
], CreateAddressDto.prototype, "state", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(2),
    (0, swagger_1.ApiProperty)({
        example: 'Colonia',
    }),
    __metadata("design:type", String)
], CreateAddressDto.prototype, "cologne", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(2),
    (0, swagger_1.ApiProperty)({
        example: 'Calle',
    }),
    __metadata("design:type", String)
], CreateAddressDto.prototype, "street", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(1),
    (0, swagger_1.ApiProperty)({
        example: 14,
    }),
    __metadata("design:type", String)
], CreateAddressDto.prototype, "outdoorNumber", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(1),
    (0, swagger_1.ApiProperty)({
        example: 14,
    }),
    __metadata("design:type", String)
], CreateAddressDto.prototype, "interiorNumber", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(1),
    (0, swagger_1.ApiProperty)({
        example: 'floor',
    }),
    __metadata("design:type", String)
], CreateAddressDto.prototype, "floor", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsPositive)(),
    (0, class_validator_1.Length)(5),
    (0, swagger_1.ApiProperty)({
        example: 38700,
    }),
    __metadata("design:type", Number)
], CreateAddressDto.prototype, "cp", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(10),
    (0, swagger_1.ApiProperty)({
        example: 'Referencias',
    }),
    __metadata("design:type", String)
], CreateAddressDto.prototype, "reference", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 19.431103,
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateAddressDto.prototype, "long", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: -99.153951,
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateAddressDto.prototype, "lat", void 0);
exports.CreateAddressDto = CreateAddressDto;
//# sourceMappingURL=create-address.dto.js.map