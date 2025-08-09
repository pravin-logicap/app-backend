"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useGlobalPipes(new common_1.ValidationPipe({ whitelist: true, transform: true }));
    app.enableCors({
        origin: '*'
    });
    app.use((req, res, next) => {
        common_1.Logger.log(`API called ${req.method} ${req.originalUrl}`, 'HTTP');
        const start = Date.now();
        res.on('finish', () => {
            common_1.Logger.log(`${req.method} ${req.originalUrl} -> ${res.statusCode} ${Date.now() - start}ms`, 'HTTP');
        });
        next();
    });
    const port = Number(process.env.PORT) || 3002;
    await app.listen(port);
    const url = await app.getUrl();
    common_1.Logger.log(`Service started on ${url}`, 'Bootstrap');
}
bootstrap();
//# sourceMappingURL=main.js.map