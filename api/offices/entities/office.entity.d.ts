import { Address } from 'src/api/address/entities/address.entity';
import { Appointment } from 'src/api/appointment/entities/appointment.entity';
import { Doctor } from 'src/api/doctors/entities/doctor.entity';
import { Schedule } from 'src/api/schedules/entities/schedule.entity';
export declare class Office {
    id: number;
    name: string;
    photo: string;
    slotMinTime: string;
    slotMaxTime: string;
    status: string;
    doctor: Doctor;
    schedules: Schedule;
    appointment: Appointment;
    address: Address;
}
