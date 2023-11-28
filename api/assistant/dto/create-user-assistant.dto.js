"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserAssistantDto = void 0;
const openapi = require("@nestjs/swagger");
const create_user_dto_1 = require("../../users/dto/create-user.dto");
class CreateUserAssistantDto extends create_user_dto_1.CreateUserDto {
    static _OPENAPI_METADATA_FACTORY() {
        return {};
    }
}
exports.CreateUserAssistantDto = CreateUserAssistantDto;
//# sourceMappingURL=create-user-assistant.dto.js.map