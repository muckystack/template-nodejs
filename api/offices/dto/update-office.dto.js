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
exports.UpdateOfficeDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const create_office_dto_1 = require("./create-office.dto");
const class_validator_1 = require("class-validator");
const statusOffice_enum_1 = require("../../../enums/statusOffice.enum");
class UpdateOfficeDto extends (0, swagger_1.PartialType)(create_office_dto_1.CreateOfficeDto) {
    static _OPENAPI_METADATA_FACTORY() {
        return { status: { required: true, type: () => String } };
    }
}
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsEnum)(statusOffice_enum_1.StatusOfficeEnum),
    (0, swagger_1.ApiProperty)({
        example: statusOffice_enum_1.StatusOfficeEnum.INACTIVE,
    }),
    __metadata("design:type", String)
], UpdateOfficeDto.prototype, "status", void 0);
exports.UpdateOfficeDto = UpdateOfficeDto;
//# sourceMappingURL=update-office.dto.js.map