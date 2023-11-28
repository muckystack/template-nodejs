import { CreateAddressDto } from 'src/api/address/dto/create-address.dto';
export declare class CreateOfficeDto {
    address: CreateAddressDto;
    name: string;
    photo: string;
    slotMinTime: string;
    slotMaxTime: string;
}
