import { SpecialtyService } from './specialty.service';
import { CreateSpecialtyDto } from './dto/create-specialty.dto';
import { UpdateSpecialtyDto } from './dto/update-specialty.dto';
export declare class SpecialtyController {
    private readonly specialtyService;
    constructor(specialtyService: SpecialtyService);
    create(createSpecialtyDto: CreateSpecialtyDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateSpecialtyDto: UpdateSpecialtyDto): string;
    remove(id: string): string;
}
