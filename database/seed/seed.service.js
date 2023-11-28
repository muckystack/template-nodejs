"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SeedService = void 0;
const common_1 = require("@nestjs/common");
const users_seed_1 = require("./data/users-seed");
const users_service_1 = require("../../api/users/users.service");
const roles_service_1 = require("../../api/roles/roles.service");
const roles_seed_1 = require("./data/roles-seed");
const areas_seed_1 = require("./data/areas.seed");
const area_service_1 = require("../../api/area/area.service");
const doctors_seed_1 = require("./data/doctors-seed");
const doctors_service_1 = require("../../api/doctors/doctors.service");
const comments_service_1 = require("../../api/comments/comments.service");
const comments_seed_1 = require("./data/comments.seed");
const address_service_1 = require("../../api/address/address.service");
const address_seed_1 = require("./data/address.seed");
const offices_service_1 = require("../../api/offices/offices.service");
let SeedService = class SeedService {
    constructor(usersService, doctorsService, rolesService, areasService, commentsService, addressService, officesService) {
        this.usersService = usersService;
        this.doctorsService = doctorsService;
        this.rolesService = rolesService;
        this.areasService = areasService;
        this.commentsService = commentsService;
        this.addressService = addressService;
        this.officesService = officesService;
    }
    async runSeed() {
        await this.insertNewRoles();
        await this.insertNewAreas();
        await this.insertNewUsers();
        await this.insertNewDoctors();
        await this.insertNewComments();
        await this.insertNewAddress();
        await this.insertNewOffices();
        return 'SEED EXECUTED';
    }
    async insertNewOffices() {
    }
    async insertNewAddress() {
        await this.addressService.deleteAllAddress();
        const address = address_seed_1.addressSeed;
        const insertPromises = [];
        address.forEach((address) => {
            insertPromises.push(this.addressService.create(address));
        });
        await Promise.all(insertPromises);
        return true;
    }
    async insertNewComments() {
        await this.commentsService.deleteAllComments();
        const comments = comments_seed_1.commentSeed;
        const insertPromises = [];
        comments.forEach((comment) => {
            insertPromises.push(this.commentsService.create(comment));
        });
        await Promise.all(insertPromises);
        return true;
    }
    async insertNewDoctors() {
        await this.doctorsService.deleteAllDoctors();
        const doctors = doctors_seed_1.doctorSeed;
        const insertPromises = [];
        doctors.forEach((doctor) => {
            insertPromises.push(this.doctorsService.create(doctor));
        });
        await Promise.all(insertPromises);
        return true;
    }
    async insertNewUsers() {
        await this.usersService.deleteAllUsers();
        const users = users_seed_1.userSeed;
        const insertPromises = [];
        users.forEach((user) => {
            insertPromises.push(this.usersService.create(user));
        });
        await Promise.all(insertPromises);
        return true;
    }
    async insertNewRoles() {
        await this.rolesService.deleteAllRoles();
        const roles = roles_seed_1.roleSeed;
        const insertPromises = [];
        roles.forEach((role) => {
            insertPromises.push(this.rolesService.create(role));
        });
        await Promise.all(insertPromises);
        return true;
    }
    async insertNewAreas() {
        await this.areasService.deleteAllAreas();
        const areas = areas_seed_1.areaSeed;
        const insertPromises = [];
        areas.forEach((area) => {
            insertPromises.push(this.areasService.createArea(area));
        });
        await Promise.all(insertPromises);
        return true;
    }
};
SeedService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [users_service_1.UsersService,
        doctors_service_1.DoctorsService,
        roles_service_1.RolesService,
        area_service_1.AreaService,
        comments_service_1.CommentsService,
        address_service_1.AddressService,
        offices_service_1.OfficesService])
], SeedService);
exports.SeedService = SeedService;
//# sourceMappingURL=seed.service.js.map