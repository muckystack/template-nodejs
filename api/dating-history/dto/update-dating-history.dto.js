"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateDatingHistoryDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const create_dating_history_dto_1 = require("./create-dating-history.dto");
class UpdateDatingHistoryDto extends (0, swagger_1.PartialType)(create_dating_history_dto_1.CreateDatingHistoryDto) {
    static _OPENAPI_METADATA_FACTORY() {
        return {};
    }
}
exports.UpdateDatingHistoryDto = UpdateDatingHistoryDto;
//# sourceMappingURL=update-dating-history.dto.js.map