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
exports.Assistant = void 0;
const openapi = require("@nestjs/swagger");
const doctor_entity_1 = require("../../doctors/entities/doctor.entity");
const user_entity_1 = require("../../users/entities/user.entity");
const typeorm_1 = require("typeorm");
let Assistant = class Assistant {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => Number }, user: { required: true, type: () => require("../../users/entities/user.entity").User }, doctor: { required: true, type: () => require("../../doctors/entities/doctor.entity").Doctor } };
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], Assistant.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => user_entity_1.User, (user) => user.assistant, { eager: true }),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", user_entity_1.User)
], Assistant.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => doctor_entity_1.Doctor, (doctor) => doctor.assistant),
    __metadata("design:type", doctor_entity_1.Doctor)
], Assistant.prototype, "doctor", void 0);
Assistant = __decorate([
    (0, typeorm_1.Entity)({ name: 'assistants' })
], Assistant);
exports.Assistant = Assistant;
//# sourceMappingURL=assistant.entity.js.map