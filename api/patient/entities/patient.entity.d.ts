import { Appointment } from 'src/api/appointment/entities/appointment.entity';
import { DatingHistory } from 'src/api/dating-history/entities/dating-history.entity';
import { Diagnosis } from 'src/api/diagnosis/entities/diagnosis.entity';
import { Doctor } from 'src/api/doctors/entities/doctor.entity';
import { User } from 'src/api/users/entities/user.entity';
import { TimeStampEntity } from 'src/entities/timestamp.globalEntity';
export declare class Patient extends TimeStampEntity {
    id: number;
    age: number;
    height: number;
    gender: string;
    address: string;
    guardianName: string;
    comment: string;
    getNotifications: boolean;
    user: User;
    datingHistory: DatingHistory;
    appointment: Appointment;
    doctor: Doctor;
    diagnosis: Diagnosis;
}
