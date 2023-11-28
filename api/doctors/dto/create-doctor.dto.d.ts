import { CreateUserDto } from 'src/api/users/dto/create-user.dto';
export declare class CreateDoctorDto extends CreateUserDto {
    professionalLicense?: string;
    professionalProfile: any;
}
