"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetUserDecorator = void 0;
const common_1 = require("@nestjs/common");
exports.GetUserDecorator = (0, common_1.createParamDecorator)((data, ctx) => {
    const req = ctx.switchToHttp().getRequest();
    const user = req.user;
    if (!user)
        throw new common_1.InternalServerErrorException('User not found (request)');
    return !data ? user : user[data];
});
//# sourceMappingURL=get-user.decorator.js.map