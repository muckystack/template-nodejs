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
exports.Document = void 0;
const openapi = require("@nestjs/swagger");
const diagnosis_entity_1 = require("../../diagnosis/entities/diagnosis.entity");
const timestamp_globalEntity_1 = require("../../../entities/timestamp.globalEntity");
const typeorm_1 = require("typeorm");
let Document = class Document extends timestamp_globalEntity_1.TimeStampEntity {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => Number }, document: { required: true, type: () => String }, name: { required: true, type: () => String }, diagnosis: { required: true, type: () => require("../../diagnosis/entities/diagnosis.entity").Diagnosis } };
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], Document.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('text'),
    __metadata("design:type", String)
], Document.prototype, "document", void 0);
__decorate([
    (0, typeorm_1.Column)('text', { default: '' }),
    __metadata("design:type", String)
], Document.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => diagnosis_entity_1.Diagnosis, (diagnosis) => diagnosis.documents),
    __metadata("design:type", diagnosis_entity_1.Diagnosis)
], Document.prototype, "diagnosis", void 0);
Document = __decorate([
    (0, typeorm_1.Entity)({ name: 'documents' })
], Document);
exports.Document = Document;
//# sourceMappingURL=document.entity.js.map