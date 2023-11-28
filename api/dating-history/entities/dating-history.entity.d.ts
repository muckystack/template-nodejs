import { Patient } from 'src/api/patient/entities/patient.entity';
import { Schedule } from 'src/api/schedules/entities/schedule.entity';
export declare class DatingHistory {
    id: number;
    init: Date;
    end: Date;
    patient: Patient;
    doctor: Patient;
    schedule: Schedule;
    createdAt: Date;
}
