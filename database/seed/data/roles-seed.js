"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.roleSeed = void 0;
const interfaces_1 = require("../../../api/auth/interfaces");
exports.roleSeed = [
    {
        description: interfaces_1.ValidRoles.ADMINISTRADOR,
    },
    {
        description: interfaces_1.ValidRoles.USUARIO,
    },
    {
        description: interfaces_1.ValidRoles.DOCTOR,
    },
    {
        description: interfaces_1.ValidRoles.ASISTENTE,
    },
];
//# sourceMappingURL=roles-seed.js.map