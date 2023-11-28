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
exports.CreateBankDataDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateBankDataDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { cardNumber: { required: true, type: () => String, minLength: 16 }, bank: { required: true, type: () => String, minLength: 1 }, expirationDateMonth: { required: true, type: () => String, minLength: 2 }, expirationDateYear: { required: true, type: () => String, minLength: 2 }, isPrincipal: { required: true, type: () => Boolean } };
    }
}
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '0123098312330983',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(16),
    __metadata("design:type", String)
], CreateBankDataDto.prototype, "cardNumber", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Bancomer',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(1),
    __metadata("design:type", String)
], CreateBankDataDto.prototype, "bank", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '03',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(2),
    __metadata("design:type", String)
], CreateBankDataDto.prototype, "expirationDateMonth", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '25',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(2),
    __metadata("design:type", String)
], CreateBankDataDto.prototype, "expirationDateYear", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: true,
    }),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], CreateBankDataDto.prototype, "isPrincipal", void 0);
exports.CreateBankDataDto = CreateBankDataDto;
//# sourceMappingURL=create-bank-data.dto.js.map