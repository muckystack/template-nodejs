import { Office } from 'src/api/offices/entities/office.entity';
import { Patient } from 'src/api/patient/entities/patient.entity';
export declare class CreateAppointmentDto {
    title: string;
    date: Date;
    start: string;
    end: string;
    office: Office;
    patient: Patient;
    status: string;
}
