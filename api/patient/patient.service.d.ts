import { CreatePatientDto } from './dto/create-patient.dto';
import { UpdatePatientDto } from './dto/update-patient.dto';
import { Repository } from 'typeorm';
import { Patient } from './entities/patient.entity';
export declare class PatientService {
    private readonly patientRepository;
    constructor(patientRepository: Repository<Patient>);
    create(createPatientDto: CreatePatientDto): Promise<Patient>;
    findAll(): Promise<Patient[]>;
    findOne(id: number): Promise<Patient>;
    update(id: number, updatePatientDto: UpdatePatientDto): Promise<Patient>;
    remove(id: number): Promise<void>;
    deleteAllPatients(): Promise<import("typeorm").DeleteResult>;
    private handleDBErrors;
}
