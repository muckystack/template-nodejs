import { Doctor } from '../entities/doctor.entity';
import { DoctorMap } from '../models/doctor.model';
export declare class DoctorsMapper {
    mapFrom(doctors: Doctor[]): DoctorMap[];
}
