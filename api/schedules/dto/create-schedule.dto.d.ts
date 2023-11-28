import { Office } from 'src/api/offices/entities/office.entity';
export declare class CreateScheduleDto {
    init: string;
    end: string;
    isActive: boolean;
    office: Office;
}
