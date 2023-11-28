import { OfficesService } from './offices.service';
import { CreateOfficeDto } from './dto/create-office.dto';
import { UpdateOfficeDto } from './dto/update-office.dto';
import { User } from '../users/entities/user.entity';
export declare class OfficesController {
    private readonly officesService;
    constructor(officesService: OfficesService);
    create(createOfficeDto: CreateOfficeDto, user: User): Promise<import("./entities/office.entity").Office>;
    findAll(user: User): Promise<import("./entities/office.entity").Office[]>;
    findOne(id: string, user: User): Promise<import("./entities/office.entity").Office>;
    update(id: string, updateOfficeDto: UpdateOfficeDto, user: User): Promise<import("./entities/office.entity").Office | import("@nestjs/common").NotFoundException>;
    deleteOffice(id: string, user: User): Promise<import("./entities/office.entity").Office | import("@nestjs/common").NotFoundException>;
}
