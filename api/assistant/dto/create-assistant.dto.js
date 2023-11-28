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
exports.CreateAssistantDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const create_user_assistant_dto_1 = require("./create-user-assistant.dto");
const class_validator_1 = require("class-validator");
class CreateAssistantDto extends create_user_assistant_dto_1.CreateUserAssistantDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { image: { required: false }, gender: { required: true, type: () => String }, phone: { required: true, type: () => String } };
    }
}
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({
        example: 'imagen base 64 asistente',
    }),
    __metadata("design:type", void 0)
], CreateAssistantDto.prototype, "image", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({
        example: 'Masculino',
    }),
    __metadata("design:type", String)
], CreateAssistantDto.prototype, "gender", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({
        example: '1234567890',
    }),
    __metadata("design:type", String)
], CreateAssistantDto.prototype, "phone", void 0);
exports.CreateAssistantDto = CreateAssistantDto;
//# sourceMappingURL=create-assistant.dto.js.map