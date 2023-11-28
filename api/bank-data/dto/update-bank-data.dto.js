"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateBankDataDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const create_bank_data_dto_1 = require("./create-bank-data.dto");
class UpdateBankDataDto extends (0, swagger_1.PartialType)(create_bank_data_dto_1.CreateBankDataDto) {
    static _OPENAPI_METADATA_FACTORY() {
        return {};
    }
}
exports.UpdateBankDataDto = UpdateBankDataDto;
//# sourceMappingURL=update-bank-data.dto.js.map