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
exports.OfficesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const office_entity_1 = require("./entities/office.entity");
const address_entity_1 = require("../address/entities/address.entity");
const statusOffice_enum_1 = require("../../enums/statusOffice.enum");
let OfficesService = class OfficesService {
    constructor(officeRepository, addressRepository, dataSource) {
        this.officeRepository = officeRepository;
        this.addressRepository = addressRepository;
        this.dataSource = dataSource;
    }
    async create(createOfficeDto, user) {
        const queryRunner = this.dataSource.createQueryRunner();
        await queryRunner.connect();
        await queryRunner.startTransaction();
        try {
            const { address } = createOfficeDto, officeData = __rest(createOfficeDto, ["address"]);
            const addressSave = this.addressRepository.create(Object.assign({}, address));
            await queryRunner.manager.save(addressSave);
            const office = this.officeRepository.create(Object.assign(Object.assign({}, officeData), { doctor: user.doctor, address: addressSave }));
            await queryRunner.manager.save(office);
            await queryRunner.commitTransaction();
            await queryRunner.release();
            return await this.findOne(office.id, user);
        }
        catch (error) {
            await queryRunner.rollbackTransaction();
            await queryRunner.release();
            this.handleDBErrors(error);
        }
    }
    async findAll(user) {
        try {
            const offices = await this.officeRepository.find({
                where: {
                    doctor: { id: user.doctor.id },
                },
                relations: {
                    address: true,
                },
            });
            return offices;
        }
        catch (error) {
            return this.handleDBErrors(error);
        }
    }
    async findOne(id, user) {
        try {
            const offices = await this.officeRepository.findOne({
                where: {
                    doctor: { id: user.doctor.id },
                    id,
                },
                relations: {
                    address: true,
                },
            });
            return offices;
        }
        catch (error) {
            return this.handleDBErrors(error);
        }
    }
    async update(id, updateOfficeDto, user) {
        const queryRunner = this.dataSource.createQueryRunner();
        await queryRunner.connect();
        await queryRunner.startTransaction();
        try {
            const office = await this.findOne(id, user);
            if (!office) {
                return new common_1.NotFoundException(`No se encontro oficina con el id: ${id}`);
            }
            const { address } = updateOfficeDto, dataUpdate = __rest(updateOfficeDto, ["address"]);
            const addressUpdate = await this.addressRepository.merge(office.address, address);
            await queryRunner.manager.save(addressUpdate);
            const officeUpdate = this.officeRepository.merge(office, dataUpdate);
            await queryRunner.manager.save(officeUpdate);
            await queryRunner.commitTransaction();
            await queryRunner.release();
            return await this.findOne(office.id, user);
        }
        catch (error) {
            await queryRunner.rollbackTransaction();
            await queryRunner.release();
            return this.handleDBErrors(error);
        }
    }
    async deleteOffice(id, user) {
        const office = await this.findOne(id, user);
        try {
            if (!office) {
                return new common_1.NotFoundException(`No se encontro oficina con el id: ${id}`);
            }
            const officeData = await this.officeRepository.merge(office, {
                status: statusOffice_enum_1.StatusOfficeEnum.INACTIVE,
            });
            return await this.officeRepository.save(officeData);
        }
        catch (error) {
            return this.handleDBErrors(error);
        }
    }
    async deleteAllOffices() {
        const query = this.officeRepository.createQueryBuilder('offices');
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
OfficesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(office_entity_1.Office)),
    __param(1, (0, typeorm_1.InjectRepository)(address_entity_1.Address)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.DataSource])
], OfficesService);
exports.OfficesService = OfficesService;
//# sourceMappingURL=offices.service.js.map