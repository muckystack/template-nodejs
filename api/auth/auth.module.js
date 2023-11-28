"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthModule = void 0;
const common_1 = require("@nestjs/common");
const auth_service_1 = require("./auth.service");
const auth_controller_1 = require("./auth.controller");
const passport_1 = require("@nestjs/passport");
const jwt_1 = require("@nestjs/jwt");
const config_1 = require("@nestjs/config");
const jwt_strategy_1 = require("./strategies/jwt.strategy");
const typeorm_1 = require("@nestjs/typeorm");
const user_entity_1 = require("../users/entities/user.entity");
let AuthModule = class AuthModule {
};
AuthModule = __decorate([
    (0, common_1.Module)({
        controllers: [auth_controller_1.AuthController],
        providers: [auth_service_1.AuthService, jwt_strategy_1.JwtStrategy],
        imports: [
            passport_1.PassportModule.register({ defaultStrategy: 'jwt' }),
            jwt_1.JwtModule.registerAsync({
                imports: [],
                inject: [],
                useFactory: () => {
                    return {
                        secret: process.env.JWT_SECRET,
                        signOptions: {
                            expiresIn: process.env.JWT_EXP,
                        },
                    };
                },
            }),
            config_1.ConfigModule,
            typeorm_1.TypeOrmModule.forFeature([user_entity_1.User]),
        ],
        exports: [
            typeorm_1.TypeOrmModule,
            jwt_strategy_1.JwtStrategy,
            passport_1.PassportModule,
            jwt_1.JwtModule,
        ],
    })
], AuthModule);
exports.AuthModule = AuthModule;
//# sourceMappingURL=auth.module.js.map