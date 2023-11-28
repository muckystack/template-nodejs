import { Diagnosis } from 'src/api/diagnosis/entities/diagnosis.entity';
import { TimeStampEntity } from 'src/entities/timestamp.globalEntity';
export declare class Document extends TimeStampEntity {
    id: number;
    document: string;
    name: string;
    diagnosis: Diagnosis;
}
