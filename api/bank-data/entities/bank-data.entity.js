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
exports.BankData = void 0;
const openapi = require("@nestjs/swagger");
const doctor_entity_1 = require("../../doctors/entities/doctor.entity");
const typeorm_1 = require("typeorm");
let BankData = class BankData {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => Number }, cardNumber: { required: true, type: () => String }, bank: { required: true, type: () => String }, expirationDateMonth: { required: true, type: () => String }, expirationDateYear: { required: true, type: () => String }, isPrincipal: { required: true, type: () => Boolean }, doctor: { required: true, type: () => require("../../doctors/entities/doctor.entity").Doctor } };
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], BankData.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('text'),
    __metadata("design:type", String)
], BankData.prototype, "cardNumber", void 0);
__decorate([
    (0, typeorm_1.Column)('text'),
    __metadata("design:type", String)
], BankData.prototype, "bank", void 0);
__decorate([
    (0, typeorm_1.Column)('text'),
    __metadata("design:type", String)
], BankData.prototype, "expirationDateMonth", void 0);
__decorate([
    (0, typeorm_1.Column)('text'),
    __metadata("design:type", String)
], BankData.prototype, "expirationDateYear", void 0);
__decorate([
    (0, typeorm_1.Column)('bool'),
    __metadata("design:type", Boolean)
], BankData.prototype, "isPrincipal", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => doctor_entity_1.Doctor, (doctor) => doctor.bankData),
    __metadata("design:type", doctor_entity_1.Doctor)
], BankData.prototype, "doctor", void 0);
BankData = __decorate([
    (0, typeorm_1.Entity)({ name: 'bankData' })
], BankData);
exports.BankData = BankData;
//# sourceMappingURL=bank-data.entity.js.map