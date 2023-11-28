import { NotFoundException } from '@nestjs/common';
import { CreateAssistantDto } from './dto/create-assistant.dto';
import { UpdateAssistantDto } from './dto/update-assistant.dto';
import { DataSource, Repository } from 'typeorm';
import { Assistant } from './entities/assistant.entity';
import { User } from '../users/entities/user.entity';
import { Role } from '../roles/entities/role.entity';
import { PaginationDto } from 'src/common/dtos/pagination.dto';
export declare class AssistantService {
    private readonly assistantRepository;
    private readonly userRepository;
    private readonly roleRepository;
    private readonly dataSource;
    constructor(assistantRepository: Repository<Assistant>, userRepository: Repository<User>, roleRepository: Repository<Role>, dataSource: DataSource);
    create(createAssistantDto: CreateAssistantDto, user: User): Promise<Assistant | NotFoundException>;
    findAll(query: PaginationDto, user: User): Promise<{
        count: {
            limit: number;
            page: number;
            total: number;
        };
        data: Assistant[];
    }>;
    findOne(id: number, user: User): Promise<Assistant | NotFoundException>;
    update(id: number, updateAssistantDto: UpdateAssistantDto, user: User): Promise<Assistant | NotFoundException>;
    remove(id: number, user: User): Promise<void>;
    deleteAllassistants(): Promise<import("typeorm").DeleteResult>;
    private handleDBErrors;
}
