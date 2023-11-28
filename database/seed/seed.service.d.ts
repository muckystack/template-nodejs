import { UsersService } from 'src/api/users/users.service';
import { RolesService } from 'src/api/roles/roles.service';
import { AreaService } from 'src/api/area/area.service';
import { DoctorsService } from 'src/api/doctors/doctors.service';
import { CommentsService } from 'src/api/comments/comments.service';
import { AddressService } from 'src/api/address/address.service';
import { OfficesService } from 'src/api/offices/offices.service';
export declare class SeedService {
    private readonly usersService;
    private readonly doctorsService;
    private readonly rolesService;
    private readonly areasService;
    private readonly commentsService;
    private readonly addressService;
    private readonly officesService;
    constructor(usersService: UsersService, doctorsService: DoctorsService, rolesService: RolesService, areasService: AreaService, commentsService: CommentsService, addressService: AddressService, officesService: OfficesService);
    runSeed(): Promise<string>;
    insertNewOffices(): Promise<void>;
    insertNewAddress(): Promise<boolean>;
    insertNewComments(): Promise<boolean>;
    private insertNewDoctors;
    private insertNewUsers;
    private insertNewRoles;
    private insertNewAreas;
}
