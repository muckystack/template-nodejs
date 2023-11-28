import { Repository } from 'typeorm';
import { Area } from './entities/area.entity';
import { CreateAreaDto } from './dto/create-area.dto';
export declare class AreaService {
    private readonly _areaRepository;
    constructor(_areaRepository: Repository<Area>);
    findAll(): Promise<Array<Area>>;
    findOne(id: number): Promise<Area>;
    createArea(createAreaDto: CreateAreaDto): Promise<Area>;
    updateArea(id: number, body: {
        name: string;
    }): Promise<Area>;
    deleteAllAreas(): Promise<import("typeorm").DeleteResult>;
    private handleDBErrors;
}
