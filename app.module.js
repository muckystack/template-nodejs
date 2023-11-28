"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const config_1 = require("@nestjs/config");
const typeorm_1 = require("@nestjs/typeorm");
const seed_module_1 = require("./database/seed/seed.module");
const users_module_1 = require("./api/users/users.module");
const roles_module_1 = require("./api/roles/roles.module");
const auth_module_1 = require("./api/auth/auth.module");
const area_module_1 = require("./api/area/area.module");
const doctors_module_1 = require("./api/doctors/doctors.module");
const offices_module_1 = require("./api/offices/offices.module");
const comments_module_1 = require("./api/comments/comments.module");
const address_module_1 = require("./api/address/address.module");
const schedules_module_1 = require("./api/schedules/schedules.module");
const dating_history_module_1 = require("./api/dating-history/dating-history.module");
const patient_module_1 = require("./api/patient/patient.module");
const bank_data_module_1 = require("./api/bank-data/bank-data.module");
const common_module_1 = require("./common/common.module");
const assistant_module_1 = require("./api/assistant/assistant.module");
const doctor_patients_module_1 = require("./api/doctor-patients/doctor-patients.module");
const diagnosis_module_1 = require("./api/diagnosis/diagnosis.module");
const documents_module_1 = require("./api/documents/documents.module");
const dashboard_module_1 = require("./api/dashboard/dashboard.module");
const appointment_module_1 = require("./api/appointment/appointment.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot(),
            typeorm_1.TypeOrmModule.forRoot({
                type: 'postgres',
                host: process.env.DB_HOST,
                port: +process.env.DB_PORT,
                database: process.env.DB_NAME,
                username: process.env.DB_USERNAME,
                password: process.env.DB_PASSWORD,
                autoLoadEntities: true,
                synchronize: true,
                ssl: process.env.DB_SSL || false,
            }),
            common_module_1.CommonModule,
            seed_module_1.SeedModule,
            roles_module_1.RolesModule,
            users_module_1.UsersModule,
            auth_module_1.AuthModule,
            area_module_1.AreaModule,
            doctors_module_1.DoctorsModule,
            offices_module_1.OfficesModule,
            comments_module_1.CommentsModule,
            address_module_1.AddressModule,
            schedules_module_1.SchedulesModule,
            dating_history_module_1.DatingHistoryModule,
            patient_module_1.PatientModule,
            bank_data_module_1.BankDataModule,
            assistant_module_1.AssistantModule,
            doctor_patients_module_1.DoctorPatientsModule,
            diagnosis_module_1.DiagnosisModule,
            documents_module_1.DocumentsModule,
            dashboard_module_1.DashboardModule,
            appointment_module_1.AppointmentModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map