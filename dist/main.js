"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const express_basic_auth_1 = __importDefault(require("express-basic-auth"));
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useGlobalPipes(new common_1.ValidationPipe({ whitelist: true, transform: true }));
    app.enableCors({ origin: '*' });
    app.use((req, res, next) => {
        common_1.Logger.log(`API called ${req.method} ${req.originalUrl}`, 'HTTP');
        const start = Date.now();
        res.on('finish', () => {
            common_1.Logger.log(`${req.method} ${req.originalUrl} -> ${res.statusCode} ${Date.now() - start}ms`, 'HTTP');
        });
        next();
    });
    const swaggerUser = process.env.SWAGGER_USER || 'admin';
    const swaggerPass = process.env.SWAGGER_PASS || 'admin';
    app.use(['/docs', '/docs-json'], (0, express_basic_auth_1.default)({ users: { [swaggerUser]: swaggerPass }, challenge: true }));
    const config = new swagger_1.DocumentBuilder()
        .setTitle('Recruitment API')
        .setDescription('API documentation')
        .setVersion('1.0')
        .addBearerAuth({ type: 'http', scheme: 'bearer', bearerFormat: 'JWT' }, 'JWT')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('docs', app, document, {
        swaggerOptions: { persistAuthorization: true },
    });
    const port = Number(process.env.PORT) || 3002;
    await app.listen(port);
    const url = await app.getUrl();
    common_1.Logger.log(`Service started on ${url} (Swagger at ${url}/docs)`, 'Bootstrap');
}
bootstrap();
//# sourceMappingURL=main.js.map