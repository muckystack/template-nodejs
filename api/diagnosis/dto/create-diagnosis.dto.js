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
exports.CreateDiagnosisDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateDiagnosisDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { observations: { required: true, type: () => String }, recipe: { required: true, type: () => String }, patient: { required: true, type: () => Number }, documents: { required: true, type: () => [Object] } };
    }
}
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({
        example: 'N/A',
    }),
    __metadata("design:type", String)
], CreateDiagnosisDto.prototype, "observations", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({
        example: 'Tomar agua y comer bien',
    }),
    __metadata("design:type", String)
], CreateDiagnosisDto.prototype, "recipe", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, swagger_1.ApiProperty)({
        example: 1,
    }),
    __metadata("design:type", Number)
], CreateDiagnosisDto.prototype, "patient", void 0);
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, swagger_1.ApiProperty)({
        example: [
            {
                document: 'Archvo base 64...',
                name: 'Nombre del archivo',
            },
        ],
    }),
    __metadata("design:type", Array)
], CreateDiagnosisDto.prototype, "documents", void 0);
exports.CreateDiagnosisDto = CreateDiagnosisDto;
//# sourceMappingURL=create-diagnosis.dto.js.map