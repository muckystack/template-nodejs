import { User } from '../users/entities/user.entity';
import { Patient } from '../patient/entities/patient.entity';
import { Repository } from 'typeorm';
import { Appointment } from '../appointment/entities/appointment.entity';
export declare class DashboardService {
    private readonly doctorPatientRepository;
    private readonly appointmentRepository;
    constructor(doctorPatientRepository: Repository<Patient>, appointmentRepository: Repository<Appointment>);
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
    calculateTotalPendingAppointments(doctorId: number): Promise<number>;
    calculateScheduledAppointmentsThisMonth(doctorId: number): Promise<number>;
    calculateTotalPatients(doctorId: number): Promise<number>;
    calculateNewPatientsThisMonth(doctorId: number): Promise<number>;
    private handleDBErrors;
}
