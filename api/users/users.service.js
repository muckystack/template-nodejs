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
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const user_entity_1 = require("./entities/user.entity");
const bcrypt = require("bcrypt");
const role_entity_1 = require("../roles/entities/role.entity");
let UsersService = class UsersService {
    constructor(userRepository, roleRepository) {
        this.userRepository = userRepository;
        this.roleRepository = roleRepository;
    }
    async create(createUserDto) {
        try {
            const { password } = createUserDto, userData = __rest(createUserDto, ["password"]);
            const user = this.userRepository.create(Object.assign(Object.assign({}, userData), { password: bcrypt.hashSync(password, 10) }));
            await this.userRepository.save(user);
            delete user.password;
            return user;
        }
        catch (error) {
            this.handleDBErrors(error);
        }
    }
    async findAll() {
        try {
            const users = await this.userRepository.find();
            return users;
        }
        catch (error) {
            return this.handleDBErrors(error);
        }
    }
    async findOne(id) {
        try {
            const users = await this.userRepository.findOneBy({ id });
            return users;
        }
        catch (error) {
            return this.handleDBErrors(error);
        }
    }
    async update(id, updateUserDto) {
        try {
            const user = await this.userRepository.findOne({ where: { id } });
            if (!user) {
                throw new common_1.NotFoundException(`No se encontro usuario con el id: ${id}`);
            }
            const { password, roles } = updateUserDto, dataUpdate = __rest(updateUserDto, ["password", "roles"]);
            const role = await this.roleRepository.findOneBy({ id: roles });
            user.roles = role;
            this.userRepository.merge(user, dataUpdate);
            return await this.userRepository.save(user);
        }
        catch (error) {
            return this.handleDBErrors(error);
        }
    }
    async remove(id) {
        const user = await this.findOne(id);
        if (!user) {
            throw new common_1.NotFoundException(`No se encontro usuario con el id: ${id}`);
        }
        await this.userRepository.remove(user);
    }
    async deleteAllUsers() {
        const query = this.userRepository.createQueryBuilder('users');
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
UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __param(1, (0, typeorm_1.InjectRepository)(role_entity_1.Role)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map