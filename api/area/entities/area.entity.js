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
exports.Area = void 0;
const openapi = require("@nestjs/swagger");
const doctor_entity_1 = require("../../doctors/entities/doctor.entity");
const typeorm_1 = require("typeorm");
let Area = class Area {
    checkFieldsBeforeInsert() {
        this.name = this.name.toLowerCase().trim();
    }
    checkFieldsBeforeUpdate() {
        this.name = this.name.toLowerCase().trim();
    }
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => Number }, name: { required: true, type: () => String }, doctor: { required: true, type: () => require("../../doctors/entities/doctor.entity").Doctor } };
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], Area.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Area.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => doctor_entity_1.Doctor, (doctor) => doctor.areas, { cascade: false }),
    __metadata("design:type", doctor_entity_1.Doctor)
], Area.prototype, "doctor", void 0);
__decorate([
    (0, typeorm_1.BeforeInsert)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Area.prototype, "checkFieldsBeforeInsert", null);
__decorate([
    (0, typeorm_1.BeforeUpdate)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Area.prototype, "checkFieldsBeforeUpdate", null);
Area = __decorate([
    (0, typeorm_1.Entity)({ name: 'areas' })
], Area);
exports.Area = Area;
//# sourceMappingURL=area.entity.js.map