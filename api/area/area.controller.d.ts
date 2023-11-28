import { AreaService } from './area.service';
import { Area } from './entities/area.entity';
export declare class AreaController {
    private _areaService;
    constructor(_areaService: AreaService);
    getAreas(): Promise<Array<Area>>;
}
