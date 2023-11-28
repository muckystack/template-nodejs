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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const user_entity_1 = require("../users/entities/user.entity");
const bcrypt = require("bcrypt");
const jwt_1 = require("@nestjs/jwt");
let AuthService = class AuthService {
    constructor(userRepository, jwtService) {
        this.userRepository = userRepository;
        this.jwtService = jwtService;
    }
    async loginUser(loginUserDto) {
        const { password, email } = loginUserDto;
        const user = await this.userRepository.findOne({
            where: { email },
            select: { email: true, password: true, id: true },
            relations: {
                roles: true,
                doctor: true,
            },
        });
        if (!user.password || !user.roles)
            throw new common_1.UnauthorizedException('Credentials are not valid');
        if (!user)
            throw new common_1.UnauthorizedException('Credentials are not valid');
        if (!bcrypt.compareSync(password, user.password))
            throw new common_1.UnauthorizedException('Credentials are not valid');
        delete user.password;
        const users = await this.userRepository.findOne({
            where: { email },
            relations: {
                roles: true,
                doctor: true,
            },
        });
        return Object.assign(Object.assign({}, users), { token: this.getJwtToken({ id: user.id }) });
    }
    getJwtToken(payload) {
        const token = this.jwtService.sign(payload);
        return token;
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        jwt_1.JwtService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map