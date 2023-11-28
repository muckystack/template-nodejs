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
exports.AppointmentService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const appointment_entity_1 = require("./entities/appointment.entity");
const typeorm_2 = require("typeorm");
const office_entity_1 = require("../offices/entities/office.entity");
const patient_entity_1 = require("../patient/entities/patient.entity");
const statusAppointment_enum_1 = require("../../enums/statusAppointment.enum");
let AppointmentService = class AppointmentService {
    constructor(appointmentRepository, doctorPatientRepository, officeRepository, dataSource) {
        this.appointmentRepository = appointmentRepository;
        this.doctorPatientRepository = doctorPatientRepository;
        this.officeRepository = officeRepository;
        this.dataSource = dataSource;
    }
    async create(createAppointmentDto, user) {
        const appointmentData = __rest(createAppointmentDto, []);
        const getOffice = await this.officeRepository.findOne({
            where: {
                id: appointmentData.office,
                doctor: { id: user.doctor.id },
            },
            relations: { doctor: true },
        });
        if (!getOffice) {
            return new common_1.NotFoundException(`No se encontro la officina correspondiente con el id: ${appointmentData.office}`);
        }
        const getDoctorPatient = await this.doctorPatientRepository.findOne({
            where: {
                id: appointmentData.patient,
                doctor: { id: user.doctor.id },
            },
            relations: { user: true },
        });
        if (!getDoctorPatient) {
            return new common_1.NotFoundException(`No se encontro el paciente correspondiente con el id: ${appointmentData.patient}`);
        }
        console.log(appointmentData);
        try {
            const appointment = await this.appointmentRepository.create(Object.assign({}, appointmentData));
            await this.appointmentRepository.save(appointment);
            return await this.findOne(appointment.id, user);
        }
        catch (error) {
            this.handleDBErrors(error);
        }
    }
    async findAll(user, query) {
        const { limit, page } = query;
        const offset = limit * (page - 1);
        try {
            const [appointments, total] = await this.appointmentRepository.findAndCount({
                take: limit ? limit : undefined,
                skip: offset ? offset : undefined,
                where: {
                    office: { doctor: { id: user.doctor.id } },
                    status: statusAppointment_enum_1.StatusAppintmentEnum.ACTIVE,
                },
                relations: { office: { doctor: true }, patient: true },
            });
            return offset
                ? {
                    count: { limit: +limit, page: +page, total: +total },
                    data: appointments,
                }
                : appointments;
        }
        catch (error) {
            return this.handleDBErrors(error);
        }
    }
    async findAllHistory(user, query) {
        const { limit, page } = query;
        const offset = limit * (page - 1);
        try {
            const [appointments, total] = await this.appointmentRepository.findAndCount({
                take: limit ? limit : undefined,
                skip: offset ? offset : undefined,
                where: { office: { doctor: { id: user.doctor.id } } },
                relations: { office: { doctor: true }, patient: true },
                order: {
                    date: 'DESC',
                },
            });
            return offset
                ? {
                    count: { limit: +limit, page: +page, total: +total },
                    data: appointments,
                }
                : appointments;
        }
        catch (error) {
            return this.handleDBErrors(error);
        }
    }
    async findOne(id, user) {
        try {
            const appointments = await this.appointmentRepository.findOne({
                where: { office: { doctor: { id: user.doctor.id } }, id },
                relations: { office: { doctor: true }, patient: true },
            });
            return appointments;
        }
        catch (error) {
            return this.handleDBErrors(error);
        }
    }
    async update(id, updateAppointmentDto, user) {
        const queryRunner = this.dataSource.createQueryRunner();
        await queryRunner.connect();
        await queryRunner.startTransaction();
        try {
            const appointments = await this.appointmentRepository.findOne({
                where: {
                    office: { doctor: { id: user.doctor.id } },
                    id,
                },
                relations: { office: { doctor: true } },
            });
            if (!appointments) {
                return new common_1.NotFoundException(`No se encontro cita con el id: ${id}`);
            }
            const { patient, office } = updateAppointmentDto, dataUpdate = __rest(updateAppointmentDto, ["patient", "office"]);
            const getOffice = await this.officeRepository.findOne({
                where: { id: office, doctor: { id: user.doctor.id } },
            });
            if (!getOffice) {
                return new common_1.NotFoundException(`No se encontro oficina con el id: ${office}`);
            }
            console.log(appointments);
            const appointmentData = await this.appointmentRepository.merge(appointments, Object.assign(Object.assign({}, dataUpdate), { office: getOffice }));
            await queryRunner.manager.save(appointmentData);
            await queryRunner.commitTransaction();
            await queryRunner.release();
            return await this.findOne(id, user);
        }
        catch (error) {
            return this.handleDBErrors(error);
        }
    }
    async cancelAppoinment(id, user) {
        const appointment = await this.findOne(id, user);
        if (!appointment) {
            throw new common_1.NotFoundException(`No se encontro cita con el id: ${id}`);
        }
        const appointmentData = await this.appointmentRepository.merge(appointment, {
            status: statusAppointment_enum_1.StatusAppintmentEnum.CANCELED,
        });
        await this.appointmentRepository.save(appointmentData);
        return this.findOne(appointment.id, user);
    }
    handleDBErrors(err) {
        if (err.code === '23505')
            throw new common_1.BadRequestException(err.detail);
        console.error('====>>', err);
        throw new common_1.InternalServerErrorException('Please check server logs');
    }
};
AppointmentService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(appointment_entity_1.Appointment)),
    __param(1, (0, typeorm_1.InjectRepository)(patient_entity_1.Patient)),
    __param(2, (0, typeorm_1.InjectRepository)(office_entity_1.Office)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.DataSource])
], AppointmentService);
exports.AppointmentService = AppointmentService;
//# sourceMappingURL=appointment.service.js.map