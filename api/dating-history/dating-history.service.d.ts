import { CreateDatingHistoryDto } from './dto/create-dating-history.dto';
import { UpdateDatingHistoryDto } from './dto/update-dating-history.dto';
import { Repository } from 'typeorm';
import { DatingHistory } from './entities/dating-history.entity';
export declare class DatingHistoryService {
    private readonly datingHistoryRepository;
    constructor(datingHistoryRepository: Repository<DatingHistory>);
    create(createDatingHistoryDto: CreateDatingHistoryDto): Promise<DatingHistory>;
    findAll(): Promise<DatingHistory[]>;
    findOne(id: number): Promise<DatingHistory>;
    update(id: number, updateDatingHistoryDto: UpdateDatingHistoryDto): Promise<DatingHistory>;
    remove(id: number): Promise<void>;
    deleteAllComments(): Promise<import("typeorm").DeleteResult>;
    private handleDBErrors;
}
