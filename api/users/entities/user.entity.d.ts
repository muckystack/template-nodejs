import { Assistant } from 'src/api/assistant/entities/assistant.entity';
import { Patient } from 'src/api/patient/entities/patient.entity';
import { Role } from 'src/api/roles/entities/role.entity';
export declare class User {
    id: number;
    name: string;
    email: string;
    lastName: string;
    motherLastName: string;
    birthdate: string;
    gender: string;
    phone: string;
    password: string;
    image?: string;
    isActive: boolean;
    roles: Role;
    doctor: Role;
    assistant: Assistant;
    patient: Patient;
    checkFieldsBeforeInsert(): void;
    checkFieldsBeforeUpdate(): void;
}
