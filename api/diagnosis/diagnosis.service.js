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
exports.DiagnosisService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const diagnosis_entity_1 = require("./entities/diagnosis.entity");
const patient_entity_1 = require("../patient/entities/patient.entity");
const document_entity_1 = require("../documents/entities/document.entity");
let DiagnosisService = class DiagnosisService {
    constructor(diagnosisRepository, patientRepository, documentRepository, dataSource) {
        this.diagnosisRepository = diagnosisRepository;
        this.patientRepository = patientRepository;
        this.documentRepository = documentRepository;
        this.dataSource = dataSource;
    }
    async create(createDiagnosisDto, user) {
        const { documents } = createDiagnosisDto, diagnosisData = __rest(createDiagnosisDto, ["documents"]);
        const queryRunner = this.dataSource.createQueryRunner();
        await queryRunner.connect();
        await queryRunner.startTransaction();
        try {
            const patient = await this.patientRepository.findOne({
                where: { id: diagnosisData.patient },
            });
            if (!patient) {
                return new common_1.NotFoundException(`No se encontro paciente`);
            }
            const diagnosis = this.diagnosisRepository.create(Object.assign(Object.assign({}, diagnosisData), { patient, doctor: user.doctor }));
            await queryRunner.manager.save(diagnosis);
            if (documents)
                for (const document of documents) {
                    const documentSaved = this.documentRepository.create(Object.assign(Object.assign({}, document), { diagnosis }));
                    await queryRunner.manager.save(documentSaved);
                }
            await queryRunner.commitTransaction();
            await queryRunner.release();
            return await this.findOne(diagnosis.id, user);
        }
        catch (error) {
            this.handleDBErrors(error);
        }
    }
    async findAll(user, patientId, query) {
        const { limit = 10, page = 1 } = query;
        const offset = limit * (page - 1);
        try {
            const [doctorPatients, total] = await this.diagnosisRepository.findAndCount({
                take: limit,
                skip: offset,
                where: { doctor: { id: user.doctor.id }, patient: { id: patientId } },
                relations: { documents: true },
                order: {
                    createdAt: 'DESC',
                },
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
            const doctorPatients = await this.diagnosisRepository.findOne({
                where: { id, doctor: { id: user.doctor.id } },
                relations: { documents: true },
            });
            return doctorPatients;
        }
        catch (error) {
            return this.handleDBErrors(error);
        }
    }
    async update(id, updateDiagnosisDto, user) {
        const queryRunner = this.dataSource.createQueryRunner();
        await queryRunner.connect();
        await queryRunner.startTransaction();
        try {
            const diagnosis = await this.diagnosisRepository.findOne({
                where: { id, doctor: { id: user.doctor.id } },
            });
            if (!diagnosis) {
                return new common_1.NotFoundException(`No se encontro diagnostico con el id: ${id}`);
            }
            await queryRunner.commitTransaction();
            await queryRunner.release();
            return await this.findOne(id, user);
        }
        catch (error) {
            return this.handleDBErrors(error);
        }
    }
    async remove(id, user) {
        const diagnosis = await this.findOne(id, user);
        if (!diagnosis) {
            throw new common_1.NotFoundException(`No se encontro diagnostico con el id: ${id}`);
        }
        await this.diagnosisRepository.remove(diagnosis);
    }
    async deleteAlldoctorPatients() {
        const query = this.diagnosisRepository.createQueryBuilder('diagnosis');
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
DiagnosisService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(diagnosis_entity_1.Diagnosis)),
    __param(1, (0, typeorm_1.InjectRepository)(patient_entity_1.Patient)),
    __param(2, (0, typeorm_1.InjectRepository)(document_entity_1.Document)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.DataSource])
], DiagnosisService);
exports.DiagnosisService = DiagnosisService;
//# sourceMappingURL=diagnosis.service.js.map