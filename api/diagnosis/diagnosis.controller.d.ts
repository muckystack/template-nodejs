import { DiagnosisService } from './diagnosis.service';
import { CreateDiagnosisDto } from './dto/create-diagnosis.dto';
import { User } from '../users/entities/user.entity';
import { PaginationDto } from 'src/common/dtos/pagination.dto';
export declare class DiagnosisController {
    private readonly diagnosisService;
    constructor(diagnosisService: DiagnosisService);
    create(createDiagnosisDto: CreateDiagnosisDto, user: User): Promise<import("./entities/diagnosis.entity").Diagnosis | import("@nestjs/common").NotFoundException>;
    findAll(user: User, patientId: number, query: PaginationDto): Promise<{
        count: {
            limit: number;
            page: number;
            total: number;
        };
        data: import("./entities/diagnosis.entity").Diagnosis[];
    }>;
    findOne(id: string, user: User): Promise<import("./entities/diagnosis.entity").Diagnosis>;
}
