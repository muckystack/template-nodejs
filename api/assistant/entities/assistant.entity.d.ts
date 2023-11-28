import { Doctor } from 'src/api/doctors/entities/doctor.entity';
import { User } from 'src/api/users/entities/user.entity';
export declare class Assistant {
    id: number;
    user: User;
    doctor: Doctor;
}
