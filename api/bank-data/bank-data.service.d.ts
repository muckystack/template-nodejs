import { NotFoundException } from '@nestjs/common';
import { CreateBankDataDto } from './dto/create-bank-data.dto';
import { UpdateBankDataDto } from './dto/update-bank-data.dto';
import { Repository } from 'typeorm';
import { BankData } from './entities/bank-data.entity';
import { User } from '../users/entities/user.entity';
export declare class BankDataService {
    private readonly bankDataRepository;
    constructor(bankDataRepository: Repository<BankData>);
    create(createBankDataDto: CreateBankDataDto, user: User): Promise<BankData | NotFoundException>;
    findAll(user: User): Promise<BankData[]>;
    findOne(id: number, user: User): Promise<BankData | NotFoundException>;
    update(id: number, updateBankDataDto: UpdateBankDataDto): Promise<BankData | NotFoundException>;
    remove(id: number, user: User): Promise<BankData | NotFoundException>;
    deleteAllbankDatas(): Promise<import("typeorm").DeleteResult>;
    private handleDBErrors;
}
