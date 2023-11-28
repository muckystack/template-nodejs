import { Doctor } from 'src/api/doctors/entities/doctor.entity';
export declare class Comment {
    id: number;
    comment: string;
    qualification: number;
    doctor: Doctor;
}
