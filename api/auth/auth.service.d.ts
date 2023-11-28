import { LoginUserDto } from './dto/login-user.dto';
import { Repository } from 'typeorm';
import { User } from '../users/entities/user.entity';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private readonly userRepository;
    private readonly jwtService;
    constructor(userRepository: Repository<User>, jwtService: JwtService);
    loginUser(loginUserDto: LoginUserDto): Promise<{
        token: string;
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
        roles: import("../roles/entities/role.entity").Role;
        doctor: import("../roles/entities/role.entity").Role;
        assistant: import("../assistant/entities/assistant.entity").Assistant;
        patient: import("../patient/entities/patient.entity").Patient;
    }>;
    private getJwtToken;
}
