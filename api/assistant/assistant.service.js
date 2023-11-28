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
exports.AssistantService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const assistant_entity_1 = require("./entities/assistant.entity");
const user_entity_1 = require("../users/entities/user.entity");
const role_entity_1 = require("../roles/entities/role.entity");
const bcrypt = require("bcrypt");
const interfaces_1 = require("../auth/interfaces");
let AssistantService = class AssistantService {
    constructor(assistantRepository, userRepository, roleRepository, dataSource) {
        this.assistantRepository = assistantRepository;
        this.userRepository = userRepository;
        this.roleRepository = roleRepository;
        this.dataSource = dataSource;
    }
    async create(createAssistantDto, user) {
        const { password } = createAssistantDto, userData = __rest(createAssistantDto, ["password"]);
        const queryRunner = this.dataSource.createQueryRunner();
        await queryRunner.connect();
        await queryRunner.startTransaction();
        try {
            const roles = await this.roleRepository.findOne({
                where: { description: interfaces_1.ValidRoles.ASISTENTE },
            });
            const userAssistant = this.userRepository.create(Object.assign(Object.assign({}, userData), { password: bcrypt.hashSync(password, 10), roles }));
            await queryRunner.manager.save(userAssistant);
            const assistantData = __rest(createAssistantDto, []);
            const assistant = this.assistantRepository.create(Object.assign(Object.assign({}, assistantData), { user: userAssistant, doctor: user.doctor }));
            await queryRunner.manager.save(assistant);
            await queryRunner.commitTransaction();
            await queryRunner.release();
            return await this.findOne(assistant.id, user);
        }
        catch (error) {
            await queryRunner.rollbackTransaction();
            await queryRunner.release();
            this.handleDBErrors(error);
        }
    }
    async findAll(query, user) {
        const { limit = 10, page = 1 } = query;
        const offset = limit * (page - 1);
        try {
            const [assistants, total] = await this.assistantRepository.findAndCount({
                take: limit,
                skip: offset,
                select: { doctor: { id: true } },
                relations: {
                    user: true,
                    doctor: true,
                },
                where: { doctor: { id: user.doctor.id } },
            });
            return {
                count: { limit: +limit, page: +page, total: +total },
                data: assistants,
            };
        }
        catch (error) {
            return this.handleDBErrors(error);
        }
    }
    async findOne(id, user) {
        try {
            const assistants = await this.assistantRepository.findOne({
                where: { id, doctor: { id: user.doctor.id } },
                select: { doctor: { id: true } },
                relations: {
                    user: { roles: true },
                    doctor: true,
                },
            });
            if (!assistants) {
                return new common_1.NotFoundException(`No se encontro asistente con el id: ${id}`);
            }
            return assistants;
        }
        catch (error) {
            return this.handleDBErrors(error);
        }
    }
    async update(id, updateAssistantDto, user) {
        const queryRunner = this.dataSource.createQueryRunner();
        await queryRunner.connect();
        await queryRunner.startTransaction();
        try {
            const assistant = await this.assistantRepository.findOne({
                where: { id },
                relations: { user: true },
            });
            if (!assistant) {
                return new common_1.NotFoundException(`No se encontro asistente con el id: ${id}`);
            }
            const dataUpdate = __rest(updateAssistantDto, []);
            const userData = this.userRepository.merge(assistant.user, Object.assign({}, dataUpdate));
            await queryRunner.manager.save(userData);
            await queryRunner.commitTransaction();
            await queryRunner.release();
            return await this.findOne(id, user);
        }
        catch (error) {
            return this.handleDBErrors(error);
        }
    }
    async remove(id, user) {
        const assistant = await this.assistantRepository.findOne({ where: { id } });
        if (!assistant) {
            throw new common_1.NotFoundException(`No se encontro asistente con el id: ${id}`);
        }
        await this.assistantRepository.remove(assistant);
    }
    async deleteAllassistants() {
        const query = this.assistantRepository.createQueryBuilder('assistants');
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
AssistantService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(assistant_entity_1.Assistant)),
    __param(1, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __param(2, (0, typeorm_1.InjectRepository)(role_entity_1.Role)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.DataSource])
], AssistantService);
exports.AssistantService = AssistantService;
//# sourceMappingURL=assistant.service.js.map