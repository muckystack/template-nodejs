import { NotFoundException } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { User } from '../users/entities/user.entity';
import { Patient } from '../patient/entities/patient.entity';
import { CreatePatientDto } from '../patient/dto/create-patient.dto';
import { UpdatePatientDto } from '../patient/dto/update-patient.dto';
import { PaginationDto } from 'src/common/dtos/pagination.dto';
import { QueryDoctorPatientDto } from './dto/query-doctor-patient.dto';
export declare class DoctorPatientsService {
    private readonly doctorPatientRepository;
    private readonly userRepository;
    private readonly dataSource;
    constructor(doctorPatientRepository: Repository<Patient>, userRepository: Repository<User>, dataSource: DataSource);
    create(createDoctorPatientDto: CreatePatientDto, user: User): Promise<Patient>;
    findAll(user: User, query: PaginationDto & QueryDoctorPatientDto): Promise<{
        count: {
            limit: number;
            page: number;
            total: number;
        };
        data: Patient[];
    }>;
    findAllByText(user: User, query: PaginationDto & QueryDoctorPatientDto): Promise<{
        data: [Patient[], number];
    }>;
    findOne(id: number, user: User): Promise<Patient>;
    update(id: number, updateDoctorPatientDto: UpdatePatientDto, user: User): Promise<Patient | NotFoundException>;
    remove(id: number, user: User): Promise<void>;
    deleteAlldoctorPatients(): Promise<import("typeorm").DeleteResult>;
    private handleDBErrors;
}
