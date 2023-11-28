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
exports.DoctorsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const doctor_entity_1 = require("./entities/doctor.entity");
const typeorm_2 = require("@nestjs/typeorm");
const user_entity_1 = require("../users/entities/user.entity");
const doctor_map_1 = require("./mapper/doctor.map");
const bcrypt = require("bcrypt");
const role_entity_1 = require("../roles/entities/role.entity");
const interfaces_1 = require("../auth/interfaces");
let DoctorsService = class DoctorsService {
    constructor(doctorRepository, userRepository, roleRepository, doctorMapper, dataSource) {
        this.doctorRepository = doctorRepository;
        this.userRepository = userRepository;
        this.roleRepository = roleRepository;
        this.doctorMapper = doctorMapper;
        this.dataSource = dataSource;
    }
    async create(createDoctorDto) {
        const { password } = createDoctorDto, userData = __rest(createDoctorDto, ["password"]);
        const queryRunner = this.dataSource.createQueryRunner();
        await queryRunner.connect();
        await queryRunner.startTransaction();
        try {
            const roles = await this.roleRepository.findOne({
                where: { description: interfaces_1.ValidRoles.DOCTOR },
            });
            const user = this.userRepository.create(Object.assign(Object.assign({}, userData), { password: bcrypt.hashSync(password, 10), roles }));
            await queryRunner.manager.save(user);
            const doctorData = __rest(createDoctorDto, []);
            const doctor = this.doctorRepository.create(Object.assign(Object.assign({}, doctorData), { user }));
            await queryRunner.manager.save(doctor);
            await queryRunner.commitTransaction();
            await queryRunner.release();
            return await this.findOne(doctor.id);
        }
        catch (error) {
            await queryRunner.rollbackTransaction();
            await queryRunner.release();
            this.handleDBErrors(error);
        }
    }
    async findAll(query) {
        const { city = '', area = '' } = query;
        const { limit = 10, page = 1 } = query;
        const offset = limit * (page - 1);
        try {
            const [doctors, total] = await this.doctorRepository.findAndCount({
                take: limit,
                skip: offset,
                where: {
                    offices: { address: { city: (0, typeorm_1.ILike)(`%${city.toLowerCase()}%`) } },
                    areas: { name: (0, typeorm_1.ILike)(`%${area.toLowerCase()}%`) },
                },
                relations: {
                    user: true,
                    areas: true,
                    comments: true,
                    offices: { address: true },
                },
            });
            const doctorsMapper = this.doctorMapper.mapFrom(doctors);
            return {
                count: { limit: +limit, page: +page, total: +total },
                data: doctorsMapper,
            };
        }
        catch (error) {
            return this.handleDBErrors(error);
        }
    }
    async findOne(id) {
        try {
            const doctors = await this.doctorRepository.findOne({
                where: { id },
                relations: {
                    user: { roles: true },
                    areas: true,
                    comments: true,
                    offices: { address: true },
                },
            });
            if (!doctors) {
                return new common_1.NotFoundException(`No se encontro doctor con el id: ${id}`);
            }
            return doctors;
        }
        catch (error) {
            return this.handleDBErrors(error);
        }
    }
    async update(updateDoctorDto, user) {
        const { password } = updateDoctorDto, userData = __rest(updateDoctorDto, ["password"]);
        const doctorFine = await this.doctorRepository.findOne({
            where: { id: user.doctor.id },
        });
        const queryRunner = this.dataSource.createQueryRunner();
        await queryRunner.connect();
        await queryRunner.startTransaction();
        try {
            const userUpdate = this.userRepository.merge(user, Object.assign({}, userData));
            await queryRunner.manager.save(userUpdate);
            const doctorData = __rest(updateDoctorDto, []);
            const doctor = this.doctorRepository.merge(doctorFine, Object.assign({}, doctorData));
            await queryRunner.manager.save(doctor);
            await queryRunner.commitTransaction();
            await queryRunner.release();
            return await this.findOne(doctor.id);
        }
        catch (error) {
            await queryRunner.rollbackTransaction();
            await queryRunner.release();
            this.handleDBErrors(error);
        }
    }
    async updatePassword(updateDoctorDto, user) {
        const { oldPassword, newPassword } = updateDoctorDto;
        try {
            const doctorFine = await this.doctorRepository.findOne({
                where: { id: user.doctor.id },
                select: { user: { password: true } },
                relations: { user: true },
            });
            console.log(doctorFine.user.password);
            console.log(oldPassword);
            if (!bcrypt.compareSync(oldPassword, doctorFine.user.password))
                return new common_1.UnauthorizedException('Credenciales no validas');
            this.userRepository.merge(user, {
                password: bcrypt.hashSync(newPassword, 10),
            });
            await this.userRepository.save(user);
            return { message: 'Contraseña actualizada' };
        }
        catch (error) {
            this.handleDBErrors(error);
        }
    }
    async remove(id) {
        const doctor = await this.doctorRepository.findOne({ where: { id } });
        if (!doctor) {
            throw new common_1.NotFoundException(`No se encontro usuario con el id: ${id}`);
        }
        await this.doctorRepository.remove(doctor);
    }
    async deleteAllDoctors() {
        const query = this.doctorRepository.createQueryBuilder('doctors');
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
DoctorsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(doctor_entity_1.Doctor)),
    __param(1, (0, typeorm_2.InjectRepository)(user_entity_1.User)),
    __param(2, (0, typeorm_2.InjectRepository)(role_entity_1.Role)),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        typeorm_1.Repository,
        typeorm_1.Repository,
        doctor_map_1.DoctorsMapper,
        typeorm_1.DataSource])
], DoctorsService);
exports.DoctorsService = DoctorsService;
//# sourceMappingURL=doctors.service.js.map