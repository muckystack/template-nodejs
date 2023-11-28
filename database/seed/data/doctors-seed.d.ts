import { UserSeed } from './users-seed';
interface DoctorSeed extends UserSeed {
    professionalLicense: string;
    officePhone: string;
    areas: number | any;
    professionalProfile?: string;
}
export declare const doctorSeed: DoctorSeed[];
export {};
