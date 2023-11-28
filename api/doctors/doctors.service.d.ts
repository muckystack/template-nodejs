import { NotFoundException, UnauthorizedException } from '@nestjs/common';
import { CreateDoctorDto } from './dto/create-doctor.dto';
import { UpdateDoctorDto } from './dto/update-doctor.dto';
import { DataSource, Repository } from 'typeorm';
import { Doctor } from './entities/doctor.entity';
import { User } from '../users/entities/user.entity';
import { DoctorsMapper } from './mapper/doctor.map';
import { Role } from '../roles/entities/role.entity';
import { QueryDoctorDto } from './dto/query-doctor';
import { PaginationDto } from 'src/common/dtos/pagination.dto';
import { UpdateDoctorPasswordDto } from './dto/update-doctor-password.dto';
export declare class DoctorsService {
    private readonly doctorRepository;
    private readonly userRepository;
    private readonly roleRepository;
    private readonly doctorMapper;
    private readonly dataSource;
    constructor(doctorRepository: Repository<Doctor>, userRepository: Repository<User>, roleRepository: Repository<Role>, doctorMapper: DoctorsMapper, dataSource: DataSource);
    create(createDoctorDto: CreateDoctorDto): Promise<Doctor | NotFoundException>;
    findAll(query: PaginationDto & QueryDoctorDto): Promise<{
        count: {
            limit: number;
            page: number;
            total: number;
        };
        data: import("./models/doctor.model").DoctorMap[];
    }>;
    findOne(id: number): Promise<Doctor | NotFoundException>;
    update(updateDoctorDto: UpdateDoctorDto, user: User): Promise<Doctor | NotFoundException>;
    updatePassword(updateDoctorDto: UpdateDoctorPasswordDto, user: User): Promise<UnauthorizedException | {
        message: string;
    }>;
    remove(id: number): Promise<void>;
    deleteAllDoctors(): Promise<import("typeorm").DeleteResult>;
    private handleDBErrors;
}
