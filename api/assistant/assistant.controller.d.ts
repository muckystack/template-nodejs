import { AssistantService } from './assistant.service';
import { CreateAssistantDto } from './dto/create-assistant.dto';
import { UpdateAssistantDto } from './dto/update-assistant.dto';
import { PaginationDto } from 'src/common/dtos/pagination.dto';
import { User } from '../users/entities/user.entity';
export declare class AssistantController {
    private readonly assistantService;
    constructor(assistantService: AssistantService);
    create(createAssistantDto: CreateAssistantDto, user: User): Promise<import("./entities/assistant.entity").Assistant | import("@nestjs/common").NotFoundException>;
    findAll(query: PaginationDto, user: User): Promise<{
        count: {
            limit: number;
            page: number;
            total: number;
        };
        data: import("./entities/assistant.entity").Assistant[];
    }>;
    findOne(id: string, user: User): Promise<import("./entities/assistant.entity").Assistant | import("@nestjs/common").NotFoundException>;
    update(id: string, updateAssistantDto: UpdateAssistantDto, user: User): Promise<import("./entities/assistant.entity").Assistant | import("@nestjs/common").NotFoundException>;
    remove(id: string, user: User): Promise<void>;
}
