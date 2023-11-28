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
exports.Schedule = void 0;
const openapi = require("@nestjs/swagger");
const dating_history_entity_1 = require("../../dating-history/entities/dating-history.entity");
const office_entity_1 = require("../../offices/entities/office.entity");
const typeorm_1 = require("typeorm");
let Schedule = class Schedule {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => Number }, init: { required: true, type: () => String }, end: { required: true, type: () => String }, isActive: { required: true, type: () => Boolean }, office: { required: true, type: () => require("../../offices/entities/office.entity").Office }, datingHistory: { required: true, type: () => require("../../dating-history/entities/dating-history.entity").DatingHistory } };
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], Schedule.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('time'),
    __metadata("design:type", String)
], Schedule.prototype, "init", void 0);
__decorate([
    (0, typeorm_1.Column)('time'),
    __metadata("design:type", String)
], Schedule.prototype, "end", void 0);
__decorate([
    (0, typeorm_1.Column)('bool'),
    __metadata("design:type", Boolean)
], Schedule.prototype, "isActive", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => office_entity_1.Office, (office) => office.schedules, { cascade: false }),
    __metadata("design:type", office_entity_1.Office)
], Schedule.prototype, "office", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => dating_history_entity_1.DatingHistory, (datingHistory) => datingHistory.schedule),
    __metadata("design:type", dating_history_entity_1.DatingHistory)
], Schedule.prototype, "datingHistory", void 0);
Schedule = __decorate([
    (0, typeorm_1.Entity)({ name: 'schedules' })
], Schedule);
exports.Schedule = Schedule;
//# sourceMappingURL=schedule.entity.js.map