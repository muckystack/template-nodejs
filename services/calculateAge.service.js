"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CalculateAgeService = void 0;
class CalculateAgeService {
    constructor() { }
    static calcularEdad(fechaNacimiento) {
        const fechaActual = new Date();
        fechaNacimiento = new Date(fechaNacimiento);
        let edad = fechaActual.getFullYear() - fechaNacimiento.getFullYear();
        if (fechaNacimiento.getMonth() > fechaActual.getMonth() ||
            (fechaNacimiento.getMonth() === fechaActual.getMonth() &&
                fechaNacimiento.getDate() > fechaActual.getDate())) {
            edad--;
        }
        return edad;
    }
}
exports.CalculateAgeService = CalculateAgeService;
//# sourceMappingURL=calculateAge.service.js.map