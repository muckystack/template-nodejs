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
exports.Address = void 0;
const openapi = require("@nestjs/swagger");
const office_entity_1 = require("../../offices/entities/office.entity");
const typeorm_1 = require("typeorm");
let Address = class Address {
    checkFieldsBeforeInsert() {
        this.city = this.city.toLowerCase().trim();
        this.state = this.state.toLowerCase().trim();
        this.cologne = this.cologne.toLowerCase().trim();
        this.street = this.street.toLowerCase().trim();
    }
    checkFieldsBeforeUpdate() {
        this.city = this.city.toLowerCase().trim();
        this.state = this.state.toLowerCase().trim();
        this.cologne = this.cologne.toLowerCase().trim();
        this.street = this.street.toLowerCase().trim();
    }
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => Number }, city: { required: true, type: () => String }, state: { required: true, type: () => String }, cologne: { required: true, type: () => String }, street: { required: true, type: () => String }, outdoorNumber: { required: true, type: () => String }, interiorNumber: { required: true, type: () => String }, floor: { required: true, type: () => String }, cp: { required: true, type: () => Number }, reference: { required: true, type: () => String }, long: { required: true, type: () => Number }, lat: { required: true, type: () => Number }, office: { required: true, type: () => require("../../offices/entities/office.entity").Office } };
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], Address.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('text'),
    __metadata("design:type", String)
], Address.prototype, "city", void 0);
__decorate([
    (0, typeorm_1.Column)('text'),
    __metadata("design:type", String)
], Address.prototype, "state", void 0);
__decorate([
    (0, typeorm_1.Column)('text'),
    __metadata("design:type", String)
], Address.prototype, "cologne", void 0);
__decorate([
    (0, typeorm_1.Column)('text'),
    __metadata("design:type", String)
], Address.prototype, "street", void 0);
__decorate([
    (0, typeorm_1.Column)('text'),
    __metadata("design:type", String)
], Address.prototype, "outdoorNumber", void 0);
__decorate([
    (0, typeorm_1.Column)('text'),
    __metadata("design:type", String)
], Address.prototype, "interiorNumber", void 0);
__decorate([
    (0, typeorm_1.Column)('text'),
    __metadata("design:type", String)
], Address.prototype, "floor", void 0);
__decorate([
    (0, typeorm_1.Column)('integer'),
    __metadata("design:type", Number)
], Address.prototype, "cp", void 0);
__decorate([
    (0, typeorm_1.Column)('text'),
    __metadata("design:type", String)
], Address.prototype, "reference", void 0);
__decorate([
    (0, typeorm_1.Column)('float'),
    __metadata("design:type", Number)
], Address.prototype, "long", void 0);
__decorate([
    (0, typeorm_1.Column)('float'),
    __metadata("design:type", Number)
], Address.prototype, "lat", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => office_entity_1.Office, (office) => office.address),
    __metadata("design:type", office_entity_1.Office)
], Address.prototype, "office", void 0);
__decorate([
    (0, typeorm_1.BeforeInsert)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Address.prototype, "checkFieldsBeforeInsert", null);
__decorate([
    (0, typeorm_1.BeforeUpdate)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Address.prototype, "checkFieldsBeforeUpdate", null);
Address = __decorate([
    (0, typeorm_1.Entity)({ name: 'address' })
], Address);
exports.Address = Address;
//# sourceMappingURL=address.entity.js.map