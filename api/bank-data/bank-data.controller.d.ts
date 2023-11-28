import { BankDataService } from './bank-data.service';
import { CreateBankDataDto } from './dto/create-bank-data.dto';
import { UpdateBankDataDto } from './dto/update-bank-data.dto';
import { User } from '../users/entities/user.entity';
export declare class BankDataController {
    private readonly bankDataService;
    constructor(bankDataService: BankDataService);
    create(CreateBankDataDto: CreateBankDataDto, user: User): Promise<import("./entities/bank-data.entity").BankData | import("@nestjs/common").NotFoundException>;
    findAll(user: User): Promise<import("./entities/bank-data.entity").BankData[]>;
    findOne(id: string, user: User): Promise<import("./entities/bank-data.entity").BankData | import("@nestjs/common").NotFoundException>;
    update(id: string, UpdateBankDataDto: UpdateBankDataDto): Promise<import("./entities/bank-data.entity").BankData | import("@nestjs/common").NotFoundException>;
    remove(id: string, user: User): Promise<import("./entities/bank-data.entity").BankData | import("@nestjs/common").NotFoundException>;
}
