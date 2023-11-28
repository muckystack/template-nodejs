import { AppointmentService } from './appointment.service';
import { CreateAppointmentDto } from './dto/create-appointment.dto';
import { UpdateAppointmentDto } from './dto/update-appointment.dto';
import { User } from '../users/entities/user.entity';
import { PaginationDto } from 'src/common/dtos/pagination.dto';
export declare class AppointmentController {
    private readonly appointmentService;
    constructor(appointmentService: AppointmentService);
    create(createAppointmentDto: CreateAppointmentDto, user: User): Promise<import("./entities/appointment.entity").Appointment | import("@nestjs/common").NotFoundException>;
    findAll(user: User, query: PaginationDto): Promise<import("./entities/appointment.entity").Appointment[] | {
        count: {
            limit: number;
            page: number;
            total: number;
        };
        data: import("./entities/appointment.entity").Appointment[];
    }>;
    findAllHistory(user: User, query: PaginationDto): Promise<import("./entities/appointment.entity").Appointment[] | {
        count: {
            limit: number;
            page: number;
            total: number;
        };
        data: import("./entities/appointment.entity").Appointment[];
    }>;
    findOne(id: string, user: User): Promise<import("./entities/appointment.entity").Appointment>;
    update(id: string, updateAppointmentDto: UpdateAppointmentDto, user: User): Promise<import("./entities/appointment.entity").Appointment | import("@nestjs/common").NotFoundException>;
    cancelAppoinment(id: string, updateAppointmentDto: UpdateAppointmentDto, user: User): Promise<import("./entities/appointment.entity").Appointment>;
}
