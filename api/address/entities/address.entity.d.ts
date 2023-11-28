import { Office } from 'src/api/offices/entities/office.entity';
export declare class Address {
    id: number;
    city: string;
    state: string;
    cologne: string;
    street: string;
    outdoorNumber: string;
    interiorNumber: string;
    floor: string;
    cp: number;
    reference: string;
    long: number;
    lat: number;
    office: Office;
    checkFieldsBeforeInsert(): void;
    checkFieldsBeforeUpdate(): void;
}
