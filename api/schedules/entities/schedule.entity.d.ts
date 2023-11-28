import { DatingHistory } from 'src/api/dating-history/entities/dating-history.entity';
import { Office } from 'src/api/offices/entities/office.entity';
export declare class Schedule {
    id: number;
    init: string;
    end: string;
    isActive: boolean;
    office: Office;
    datingHistory: DatingHistory;
}
