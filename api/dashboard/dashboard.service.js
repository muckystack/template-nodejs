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
exports.DashboardService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const patient_entity_1 = require("../patient/entities/patient.entity");
const typeorm_2 = require("typeorm");
const appointment_entity_1 = require("../appointment/entities/appointment.entity");
const statusAppointment_enum_1 = require("../../enums/statusAppointment.enum");
const date_fns_1 = require("date-fns");
let DashboardService = class DashboardService {
    constructor(doctorPatientRepository, appointmentRepository) {
        this.doctorPatientRepository = doctorPatientRepository;
        this.appointmentRepository = appointmentRepository;
    }
    async findAll(user) {
        try {
            const totalPendingAppointments = await this.calculateTotalPendingAppointments(user.doctor.id);
            const scheduledAppointmentsThisMonth = await this.calculateScheduledAppointmentsThisMonth(user.doctor.id);
            const totalPatients = await this.calculateTotalPatients(user.doctor.id);
            const newPatientsThisMonth = await this.calculateTotalPatients(user.doctor.id);
            return {
                patients: {
                    totalPatients,
                    newPatientsThisMonth,
                },
                appointments: {
                    totalPendingAppointments,
                    scheduledAppointmentsThisMonth,
                },
            };
        }
        catch (error) {
            return this.handleDBErrors(error);
        }
    }
    async calculateTotalPendingAppointments(doctorId) {
        const pendingAppointments = await this.appointmentRepository.count({
            where: {
                office: { doctor: { id: doctorId } },
                status: statusAppointment_enum_1.StatusAppintmentEnum.ACTIVE,
            },
        });
        return pendingAppointments;
    }
    async calculateScheduledAppointmentsThisMonth(doctorId) {
        const currentDate = new Date();
        const firstDayOfMonth = new Date((0, date_fns_1.getYear)(currentDate), (0, date_fns_1.getMonth)(currentDate), 1);
        const lastDayOfMonth = new Date((0, date_fns_1.getYear)(currentDate), (0, date_fns_1.getMonth)(currentDate) + 1, 0);
        const scheduledAppointments = await this.appointmentRepository.count({
            where: {
                office: { doctor: { id: doctorId } },
                createdAt: (0, typeorm_2.Between)(firstDayOfMonth, lastDayOfMonth),
            },
        });
        return scheduledAppointments;
    }
    async calculateTotalPatients(doctorId) {
        const totalPatients = await this.doctorPatientRepository.count({
            where: {
                doctor: { id: doctorId },
            },
        });
        return totalPatients;
    }
    async calculateNewPatientsThisMonth(doctorId) {
        const currentDate = new Date();
        const firstDayOfMonth = new Date((0, date_fns_1.getYear)(currentDate), (0, date_fns_1.getMonth)(currentDate), 1);
        const lastDayOfMonth = new Date((0, date_fns_1.getYear)(currentDate), (0, date_fns_1.getMonth)(currentDate) + 1, 0);
        const newPatients = await this.doctorPatientRepository.count({
            where: {
                doctor: { id: doctorId },
                createdAt: (0, typeorm_2.Between)(firstDayOfMonth, lastDayOfMonth),
            },
        });
        return newPatients;
    }
    handleDBErrors(err) {
        if (err.code === '23505')
            throw new common_1.BadRequestException(err.detail);
        console.error('====>>', err);
        throw new common_1.InternalServerErrorException('Please check server logs');
    }
};
DashboardService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(patient_entity_1.Patient)),
    __param(1, (0, typeorm_1.InjectRepository)(appointment_entity_1.Appointment)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], DashboardService);
exports.DashboardService = DashboardService;
//# sourceMappingURL=dashboard.service.js.map