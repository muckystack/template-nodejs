import { Doctor } from 'src/api/doctors/entities/doctor.entity';
export declare class Area {
    id: number;
    name: string;
    doctor: Doctor;
    checkFieldsBeforeInsert(): void;
    checkFieldsBeforeUpdate(): void;
}
