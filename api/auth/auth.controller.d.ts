import { AuthService } from './auth.service';
import { LoginUserDto } from './dto/login-user.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
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
}
