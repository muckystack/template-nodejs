"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetRawHeadersDecorator = void 0;
const common_1 = require("@nestjs/common");
exports.GetRawHeadersDecorator = (0, common_1.createParamDecorator)((data, ctx) => {
    const req = ctx.switchToHttp().getRequest();
    return req.rawHeaders;
});
//# sourceMappingURL=raw-headers.decorator.js.map