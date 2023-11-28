import { Doctor } from 'src/api/doctors/entities/doctor.entity';
export declare class CreateCommentDto {
    comment: string;
    doctor: Doctor;
    qualification: number;
}
