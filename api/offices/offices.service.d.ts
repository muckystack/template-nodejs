import { NotFoundException } from '@nestjs/common';
import { CreateOfficeDto } from './dto/create-office.dto';
import { UpdateOfficeDto } from './dto/update-office.dto';
import { DataSource, Repository } from 'typeorm';
import { Office } from './entities/office.entity';
import { User } from '../users/entities/user.entity';
import { Address } from '../address/entities/address.entity';
export declare class OfficesService {
    private readonly officeRepository;
    private readonly addressRepository;
    private readonly dataSource;
    constructor(officeRepository: Repository<Office>, addressRepository: Repository<Address>, dataSource: DataSource);
    create(createOfficeDto: CreateOfficeDto, user: User): Promise<Office>;
    findAll(user: User): Promise<Office[]>;
    findOne(id: number, user: User): Promise<Office>;
    update(id: number, updateOfficeDto: UpdateOfficeDto, user: User): Promise<Office | NotFoundException>;
    deleteOffice(id: number, user: User): Promise<Office | NotFoundException>;
    deleteAllOffices(): Promise<import("typeorm").DeleteResult>;
    private handleDBErrors;
}
