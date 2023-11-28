"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const express_1 = require("express");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors({ origin: '*' });
    const logger = new common_1.Logger('Bootstrap');
    app.setGlobalPrefix('api');
    app.use((0, express_1.json)({ limit: `${process.env.LIMIT_REQUEST}` }));
    app.use((0, express_1.urlencoded)({ extended: true, limit: `${process.env.LIMIT_REQUEST}` }));
    app.useGlobalPipes(new common_1.ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
    }));
    const config = new swagger_1.DocumentBuilder()
        .addBearerAuth()
        .setTitle('API')
        .setDescription('HEALTH FIX')
        .setVersion('1.0')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('docs', app, document);
    await app.listen(process.env.PORT);
    logger.log(`App running on port ${process.env.PORT}`);
}
bootstrap();
//# sourceMappingURL=main.js.map