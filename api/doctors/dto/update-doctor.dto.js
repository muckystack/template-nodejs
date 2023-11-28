"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateDoctorDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const create_doctor_dto_1 = require("./create-doctor.dto");
class UpdateDoctorDto extends (0, swagger_1.PartialType)(create_doctor_dto_1.CreateDoctorDto) {
    static _OPENAPI_METADATA_FACTORY() {
        return {};
    }
}
exports.UpdateDoctorDto = UpdateDoctorDto;
//# sourceMappingURL=update-doctor.dto.js.map