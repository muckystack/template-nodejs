import { Doctor } from 'src/api/doctors/entities/doctor.entity';
export declare class BankData {
    id: number;
    cardNumber: string;
    bank: string;
    expirationDateMonth: string;
    expirationDateYear: string;
    isPrincipal: boolean;
    doctor: Doctor;
}
