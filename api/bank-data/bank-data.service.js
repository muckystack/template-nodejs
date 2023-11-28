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
exports.BankDataService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const bank_data_entity_1 = require("./entities/bank-data.entity");
let BankDataService = class BankDataService {
    constructor(bankDataRepository) {
        this.bankDataRepository = bankDataRepository;
    }
    async create(createBankDataDto, user) {
        try {
            const bankDataData = __rest(createBankDataDto, []);
            const bankData = this.bankDataRepository.create(Object.assign(Object.assign({}, bankDataData), { doctor: user.doctor }));
            await this.bankDataRepository.save(bankData);
            return await this.findOne(bankData.id, user);
        }
        catch (error) {
            this.handleDBErrors(error);
        }
    }
    async findAll(user) {
        try {
            const bankDatas = await this.bankDataRepository.find({
                where: { doctor: { id: user.doctor.id } },
            });
            return bankDatas;
        }
        catch (error) {
            return this.handleDBErrors(error);
        }
    }
    async findOne(id, user) {
        try {
            const bankDatas = await this.bankDataRepository.findOne({
                where: { id, doctor: { id: user.doctor.id } },
            });
            if (!bankDatas) {
                return new common_1.NotFoundException(`No se encontro información con el id: ${id}`);
            }
            return bankDatas;
        }
        catch (error) {
            return this.handleDBErrors(error);
        }
    }
    async update(id, updateBankDataDto) {
        try {
            const bankData = await this.bankDataRepository.findOne({ where: { id } });
            if (!bankData) {
                return new common_1.NotFoundException(`No se encontro información con el id: ${id}`);
            }
            const dataUpdate = __rest(updateBankDataDto, []);
            this.bankDataRepository.merge(bankData, dataUpdate);
            return await this.bankDataRepository.save(bankData);
        }
        catch (error) {
            return this.handleDBErrors(error);
        }
    }
    async remove(id, user) {
        const bankData = await this.bankDataRepository.findOne({
            where: { id, doctor: { id: user.doctor.id } },
        });
        if (!bankData) {
            return new common_1.NotFoundException(`No se encontro usuario con el id: ${id}`);
        }
        return await this.bankDataRepository.remove(bankData);
    }
    async deleteAllbankDatas() {
        const query = this.bankDataRepository.createQueryBuilder('bankData');
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
BankDataService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(bank_data_entity_1.BankData)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], BankDataService);
exports.BankDataService = BankDataService;
//# sourceMappingURL=bank-data.service.js.map