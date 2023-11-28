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
exports.DoctorPatientsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const user_entity_1 = require("../users/entities/user.entity");
const patient_entity_1 = require("../patient/entities/patient.entity");
const calculateAge_service_1 = require("../../services/calculateAge.service");
let DoctorPatientsService = class DoctorPatientsService {
    constructor(doctorPatientRepository, userRepository, dataSource) {
        this.doctorPatientRepository = doctorPatientRepository;
        this.userRepository = userRepository;
        this.dataSource = dataSource;
    }
    async create(createDoctorPatientDto, user) {
        const { birthdate } = createDoctorPatientDto, doctorPatientData = __rest(createDoctorPatientDto, ["birthdate"]);
        const age = calculateAge_service_1.CalculateAgeService.calcularEdad(birthdate);
        console.log(age);
        const queryRunner = this.dataSource.createQueryRunner();
        await queryRunner.connect();
        await queryRunner.startTransaction();
        try {
            const userPatientDoctor = this.userRepository.create(Object.assign(Object.assign({}, doctorPatientData), { birthdate }));
            await queryRunner.manager.save(userPatientDoctor);
            const doctorPatient = this.doctorPatientRepository.create(Object.assign(Object.assign({}, doctorPatientData), { doctor: user.doctor, user: userPatientDoctor, age }));
            await queryRunner.manager.save(doctorPatient);
            await queryRunner.commitTransaction();
            await queryRunner.release();
            return await this.findOne(doctorPatient.id, user);
        }
        catch (error) {
            this.handleDBErrors(error);
        }
    }
    async findAll(user, query) {
        const { limit = 10, page = 1 } = query;
        const offset = limit * (page - 1);
        try {
            const [doctorPatients, total] = await this.doctorPatientRepository.findAndCount({
                take: limit,
                skip: offset,
                where: { doctor: { id: user.doctor.id } },
                relations: { user: true },
            });
            return {
                count: { limit: +limit, page: +page, total: +total },
                data: doctorPatients,
            };
        }
        catch (error) {
            return this.handleDBErrors(error);
        }
    }
    async findOne(id, user) {
        try {
            const doctorPatients = await this.doctorPatientRepository.findOne({
                where: { id, doctor: { id: user.doctor.id } },
                relations: { user: true },
            });
            return doctorPatients;
        }
        catch (error) {
            return this.handleDBErrors(error);
        }
    }
    async update(id, updateDoctorPatientDto, user) {
        const queryRunner = this.dataSource.createQueryRunner();
        await queryRunner.connect();
        await queryRunner.startTransaction();
        try {
            const doctorPatients = await this.doctorPatientRepository.findOne({
                where: { id, doctor: { id: user.doctor.id } },
                relations: { user: true },
            });
            if (!doctorPatients) {
                return new common_1.NotFoundException(`No se encontro paciente con el id: ${id}`);
            }
            const dataUpdate = __rest(updateDoctorPatientDto, []);
            const userData = this.userRepository.merge(doctorPatients.user, Object.assign({}, dataUpdate));
            await queryRunner.manager.save(userData);
            const doctorPatientData = this.doctorPatientRepository.merge(doctorPatients, Object.assign({}, dataUpdate));
            await queryRunner.manager.save(doctorPatientData);
            await queryRunner.commitTransaction();
            await queryRunner.release();
            return await this.findOne(id, user);
        }
        catch (error) {
            return this.handleDBErrors(error);
        }
    }
    async remove(id, user) {
        const doctorPatient = await this.findOne(id, user);
        if (!doctorPatient) {
            throw new common_1.NotFoundException(`No se encontro paciente con el id: ${id}`);
        }
        await this.doctorPatientRepository.remove(doctorPatient);
    }
    async deleteAlldoctorPatients() {
        const query = this.doctorPatientRepository.createQueryBuilder('doctorPatients');
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
DoctorPatientsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(patient_entity_1.Patient)),
    __param(1, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.DataSource])
], DoctorPatientsService);
exports.DoctorPatientsService = DoctorPatientsService;
//# sourceMappingURL=doctor-patients.service.js.map