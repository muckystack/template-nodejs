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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SchedulesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const schedule_entity_1 = require("./entities/schedule.entity");
const typeorm_2 = require("typeorm");
let SchedulesService = class SchedulesService {
    constructor(scheduleRepository) {
        this.scheduleRepository = scheduleRepository;
    }
    async create(createScheduleDto) {
        try {
            const scheduleData = __rest(createScheduleDto, []);
            const schedule = this.scheduleRepository.create(Object.assign({}, scheduleData));
            await this.scheduleRepository.save(scheduleData);
            return schedule;
        }
        catch (error) {
            this.handleDBErrors(error);
        }
    }
    async findAll() {
        try {
            const schedule = await this.scheduleRepository.find();
            return schedule;
        }
        catch (error) {
            return this.handleDBErrors(error);
        }
    }
    async findOne(id) {
        try {
            const schedule = await this.scheduleRepository.findOneBy({ id });
            return schedule;
        }
        catch (error) {
            return this.handleDBErrors(error);
        }
    }
    async update(id, updateScheduleDto) {
        try {
            const comment = await this.scheduleRepository.findOne({ where: { id } });
            if (!comment) {
                throw new common_1.NotFoundException(`No se encontro usuario con el id: ${id}`);
            }
            const dataUpdate = __rest(updateScheduleDto, []);
            this.scheduleRepository.merge(comment, dataUpdate);
            return await this.scheduleRepository.save(comment);
        }
        catch (error) {
            return this.handleDBErrors(error);
        }
    }
    async remove(id) {
        const schedule = await this.findOne(id);
        if (!schedule) {
            throw new common_1.NotFoundException(`No se encontro usuario con el id: ${id}`);
        }
        await this.scheduleRepository.remove(schedule);
    }
    async deleteAllSchedule() {
        const query = this.scheduleRepository.createQueryBuilder('schedules');
        try {
            return await query.delete().where({}).execute();
        }
        catch (error) {
            this.handleDBErrors(error);
        }
    }
    handleDBErrors(err) {
        if (err.code === '23505')
            throw new common_1.BadRequestException(err.detail);
        console.error('====>>', err);
        throw new common_1.InternalServerErrorException('Please check server logs');
    }
};
SchedulesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(schedule_entity_1.Schedule)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], SchedulesService);
exports.SchedulesService = SchedulesService;
//# sourceMappingURL=schedules.service.js.map