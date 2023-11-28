import { Office } from 'src/api/offices/entities/office.entity';
import { Patient } from 'src/api/patient/entities/patient.entity';
import { TimeStampEntity } from 'src/entities/timestamp.globalEntity';
export declare class Appointment extends TimeStampEntity {
    id: number;
    title: string;
    date: Date;
    start: string;
    end: string;
    office: Office;
    patient: Patient;
    status: string;
}
