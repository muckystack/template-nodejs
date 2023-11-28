"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserDoctorDto = void 0;
const openapi = require("@nestjs/swagger");
const user_entity_1 = require("../../users/entities/user.entity");
class CreateUserDoctorDto extends user_entity_1.User {
    static _OPENAPI_METADATA_FACTORY() {
        return {};
    }
}
exports.CreateUserDoctorDto = CreateUserDoctorDto;
//# sourceMappingURL=create-user-doctor.dto.js.map