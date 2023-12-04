import { DoctorPatientsService } from './doctor-patients.service';
import { User } from '../users/entities/user.entity';
import { CreatePatientDto } from '../patient/dto/create-patient.dto';
import { UpdatePatientDto } from '../patient/dto/update-patient.dto';
import { PaginationDto } from 'src/common/dtos/pagination.dto';
import { QueryDoctorPatientDto } from './dto/query-doctor-patient.dto';
export declare class DoctorPatientsController {
    private readonly doctorPatientsService;
    constructor(doctorPatientsService: DoctorPatientsService);
    create(createDoctorPatientDto: CreatePatientDto, user: User): Promise<import("../patient/entities/patient.entity").Patient>;
    findAll(user: User, query: PaginationDto & QueryDoctorPatientDto): Promise<{
        count: {
            limit: number;
            page: number;
            total: number;
        };
        data: import("../patient/entities/patient.entity").Patient[];
    }>;
    findOne(id: string, user: User): Promise<import("../patient/entities/patient.entity").Patient>;
    update(id: string, updateDoctorPatientDto: UpdatePatientDto, user: User): Promise<import("../patient/entities/patient.entity").Patient | import("@nestjs/common").NotFoundException>;
    remove(id: string, user: User): Promise<void>;
}
