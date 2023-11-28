import { DashboardService } from './dashboard.service';
import { User } from '../users/entities/user.entity';
export declare class DashboardController {
    private readonly dashboardService;
    constructor(dashboardService: DashboardService);
    findAll(user: User): Promise<{
        patients: {
            totalPatients: number;
            newPatientsThisMonth: number;
        };
        appointments: {
            totalPendingAppointments: number;
            scheduledAppointmentsThisMonth: number;
        };
    }>;
}
