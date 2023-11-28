import { DoctorsService } from './doctors.service';
import { CreateDoctorDto } from './dto/create-doctor.dto';
import { UpdateDoctorDto } from './dto/update-doctor.dto';
import { QueryDoctorDto } from './dto/query-doctor';
import { PaginationDto } from 'src/common/dtos/pagination.dto';
import { User } from '../users/entities/user.entity';
import { UpdateDoctorPasswordDto } from './dto/update-doctor-password.dto';
export declare class DoctorsController {
    private readonly doctorsService;
    constructor(doctorsService: DoctorsService);
    create(createDoctorDto: CreateDoctorDto): Promise<import("./entities/doctor.entity").Doctor | import("@nestjs/common").NotFoundException>;
    findAll(query: PaginationDto & QueryDoctorDto): Promise<{
        count: {
            limit: number;
            page: number;
            total: number;
        };
        data: import("./models/doctor.model").DoctorMap[];
    }>;
    findOne(id: string): Promise<import("./entities/doctor.entity").Doctor | import("@nestjs/common").NotFoundException>;
    update(updateDoctorDto: UpdateDoctorDto, user: User): Promise<import("./entities/doctor.entity").Doctor | import("@nestjs/common").NotFoundException>;
    updatePassword(updateDoctorDto: UpdateDoctorPasswordDto, user: User): Promise<import("@nestjs/common").UnauthorizedException | {
        message: string;
    }>;
}
