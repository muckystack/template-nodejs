import { Area } from 'src/api/area/entities/area.entity';
import { Assistant } from 'src/api/assistant/entities/assistant.entity';
import { BankData } from 'src/api/bank-data/entities/bank-data.entity';
import { Comment } from 'src/api/comments/entities/comment.entity';
import { DatingHistory } from 'src/api/dating-history/entities/dating-history.entity';
import { Diagnosis } from 'src/api/diagnosis/entities/diagnosis.entity';
import { Office } from 'src/api/offices/entities/office.entity';
import { Patient } from 'src/api/patient/entities/patient.entity';
import { User } from 'src/api/users/entities/user.entity';
export declare class Doctor {
    id: number;
    professionalLicense: string;
    professionalProfile: any;
    areas: Area;
    user: User;
    assistant: Assistant;
    comments: Comment[];
    offices: Office;
    datingHistory: DatingHistory;
    bankData: BankData;
    patient: Patient;
    diagnosis: Diagnosis;
}
