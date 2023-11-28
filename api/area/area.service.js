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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AreaService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const area_entity_1 = require("./entities/area.entity");
let AreaService = class AreaService {
    constructor(_areaRepository) {
        this._areaRepository = _areaRepository;
    }
    async findAll() {
        return this._areaRepository.find();
    }
    async findOne(id) {
        return this._areaRepository.findOne({ where: { id } });
    }
    async createArea(createAreaDto) {
        try {
            const { name } = createAreaDto;
            const role = this._areaRepository.create({
                name,
            });
            await this._areaRepository.save(role);
            return role;
        }
        catch (error) {
            this.handleDBErrors(error);
        }
    }
    async updateArea(id, body) {
        const area = await this._areaRepository.findOne({ where: { id } });
        if (!area) {
            throw new common_1.NotFoundException(`No se encontro área con el id: ${id}`);
        }
        area.name = body.name;
        return this._areaRepository.save(area);
    }
    async deleteAllAreas() {
        const query = this._areaRepository.createQueryBuilder('roles');
        try {
            return await query.delete().where({}).execute();
        }
        catch (error) {
        }
    }
    handleDBErrors(err) {
        if (err.code === '23505')
            throw new common_1.BadRequestException(err.detail);
        console.error(err);
        throw new common_1.InternalServerErrorException('Please check server logs');
    }
};
AreaService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(area_entity_1.Area)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], AreaService);
exports.AreaService = AreaService;
//# sourceMappingURL=area.service.js.map