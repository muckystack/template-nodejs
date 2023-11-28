import { CreateGeneralUserDto } from './create-general-user.dto';
export declare class CreateUserDto extends CreateGeneralUserDto {
    password: string;
    image?: string;
    isActive: boolean;
}
