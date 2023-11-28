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
exports.DatingHistoryService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const dating_history_entity_1 = require("./entities/dating-history.entity");
let DatingHistoryService = class DatingHistoryService {
    constructor(datingHistoryRepository) {
        this.datingHistoryRepository = datingHistoryRepository;
    }
    async create(createDatingHistoryDto) {
        try {
            const datingHistoryData = __rest(createDatingHistoryDto, []);
            const datingHistory = this.datingHistoryRepository.create(Object.assign({}, datingHistoryData));
            await this.datingHistoryRepository.save(datingHistory);
            return datingHistory;
        }
        catch (error) {
            this.handleDBErrors(error);
        }
    }
    async findAll() {
        try {
            const datingHistorys = await this.datingHistoryRepository.find();
            return datingHistorys;
        }
        catch (error) {
            return this.handleDBErrors(error);
        }
    }
    async findOne(id) {
        try {
            const datingHistorys = await this.datingHistoryRepository.findOneBy({
                id,
            });
            return datingHistorys;
        }
        catch (error) {
            return this.handleDBErrors(error);
        }
    }
    async update(id, updateDatingHistoryDto) {
        try {
            const datingHistory = await this.datingHistoryRepository.findOne({
                where: { id },
            });
            if (!datingHistory) {
                throw new common_1.NotFoundException(`No se encontro usuario con el id: ${id}`);
            }
            const dataUpdate = __rest(updateDatingHistoryDto, []);
            this.datingHistoryRepository.merge(datingHistory, dataUpdate);
            return await this.datingHistoryRepository.save(datingHistory);
        }
        catch (error) {
            return this.handleDBErrors(error);
        }
    }
    async remove(id) {
        const datingHistory = await this.findOne(id);
        if (!datingHistory) {
            throw new common_1.NotFoundException(`No se encontro usuario con el id: ${id}`);
        }
        await this.datingHistoryRepository.remove(datingHistory);
    }
    async deleteAllComments() {
        const query = this.datingHistoryRepository.createQueryBuilder('datingHistorys');
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
DatingHistoryService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(dating_history_entity_1.DatingHistory)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], DatingHistoryService);
exports.DatingHistoryService = DatingHistoryService;
//# sourceMappingURL=dating-history.service.js.map