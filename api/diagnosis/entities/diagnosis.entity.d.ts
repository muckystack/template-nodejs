import { Doctor } from 'src/api/doctors/entities/doctor.entity';
import { Document } from 'src/api/documents/entities/document.entity';
import { Patient } from 'src/api/patient/entities/patient.entity';
import { TimeStampEntity } from 'src/entities/timestamp.globalEntity';
export declare class Diagnosis extends TimeStampEntity {
    id: number;
    observations: string;
    recipe: string;
    patient: Patient;
    doctor: Doctor;
    documents: Document[];
}
