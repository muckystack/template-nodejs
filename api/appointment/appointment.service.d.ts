import { NotFoundException } from '@nestjs/common';
import { CreateAppointmentDto } from './dto/create-appointment.dto';
import { UpdateAppointmentDto } from './dto/update-appointment.dto';
import { User } from '../users/entities/user.entity';
import { Appointment } from './entities/appointment.entity';
import { DataSource, Repository } from 'typeorm';
import { PaginationDto } from 'src/common/dtos/pagination.dto';
import { Office } from '../offices/entities/office.entity';
import { Patient } from '../patient/entities/patient.entity';
export declare class AppointmentService {
    private readonly appointmentRepository;
    private readonly doctorPatientRepository;
    private readonly officeRepository;
    private readonly dataSource;
    constructor(appointmentRepository: Repository<Appointment>, doctorPatientRepository: Repository<Patient>, officeRepository: Repository<Office>, dataSource: DataSource);
    create(createAppointmentDto: CreateAppointmentDto, user: User): Promise<Appointment | NotFoundException>;
    findAll(user: User, query: PaginationDto): Promise<Appointment[] | {
        count: {
            limit: number;
            page: number;
            total: number;
        };
        data: Appointment[];
    }>;
    findAllHistory(user: User, query: PaginationDto): Promise<Appointment[] | {
        count: {
            limit: number;
            page: number;
            total: number;
        };
        data: Appointment[];
    }>;
    findOne(id: number, user: User): Promise<Appointment>;
    update(id: number, updateAppointmentDto: UpdateAppointmentDto, user: User): Promise<Appointment | NotFoundException>;
    cancelAppoinment(id: number, user: User): Promise<Appointment>;
    private handleDBErrors;
}
