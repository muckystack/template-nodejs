import { CreateGeneralUserDto } from 'src/api/users/dto/create-general-user.dto';
export declare class CreatePatientDto extends CreateGeneralUserDto {
    height: number;
    address: string;
    guardianName: string;
    comment: string;
    getNotifications: boolean;
}
