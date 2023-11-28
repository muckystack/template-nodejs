import { CreateSpecialtyDto } from './dto/create-specialty.dto';
import { UpdateSpecialtyDto } from './dto/update-specialty.dto';
export declare class SpecialtyService {
    create(createSpecialtyDto: CreateSpecialtyDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateSpecialtyDto: UpdateSpecialtyDto): string;
    remove(id: number): string;
}
