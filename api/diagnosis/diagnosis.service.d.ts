import { NotFoundException } from '@nestjs/common';
import { CreateDiagnosisDto } from './dto/create-diagnosis.dto';
import { UpdateDiagnosisDto } from './dto/update-diagnosis.dto';
import { DataSource, Repository } from 'typeorm';
import { Diagnosis } from './entities/diagnosis.entity';
import { User } from '../users/entities/user.entity';
import { Patient } from '../patient/entities/patient.entity';
import { Document } from '../documents/entities/document.entity';
import { PaginationDto } from 'src/common/dtos/pagination.dto';
export declare class DiagnosisService {
    private readonly diagnosisRepository;
    private readonly patientRepository;
    private readonly documentRepository;
    private readonly dataSource;
    constructor(diagnosisRepository: Repository<Diagnosis>, patientRepository: Repository<Patient>, documentRepository: Repository<Document>, dataSource: DataSource);
    create(createDiagnosisDto: CreateDiagnosisDto, user: User): Promise<Diagnosis | NotFoundException>;
    findAll(user: User, patientId: number, query: PaginationDto): Promise<{
        count: {
            limit: number;
            page: number;
            total: number;
        };
        data: Diagnosis[];
    }>;
    findOne(id: number, user: User): Promise<Diagnosis>;
    update(id: number, updateDiagnosisDto: UpdateDiagnosisDto, user: User): Promise<Diagnosis | NotFoundException>;
    remove(id: number, user: User): Promise<void>;
    deleteAlldoctorPatients(): Promise<import("typeorm").DeleteResult>;
    private handleDBErrors;
}
