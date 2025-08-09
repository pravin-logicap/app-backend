import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe, Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }));
  //app.enableCors({ origin: [/^http:\/\/localhost:\d+$/], credentials: true });
  app.enableCors({
    origin: '*'
  });
  app.use((req: any, res: any, next: any) => {
    // Log at request start
    Logger.log(`API called ${req.method} ${req.originalUrl}`, 'HTTP');
    const start = Date.now();
    res.on('finish', () => {
      // Optional completion log with status and timing
      Logger.log(
        `${req.method} ${req.originalUrl} -> ${res.statusCode} ${Date.now() - start}ms`,
        'HTTP',
      );
    });
    next();
  });

  const port = Number(process.env.PORT) || 3002;
  await app.listen(port);
  const url = await app.getUrl();
  Logger.log(`Service started on ${url}`, 'Bootstrap');
}
bootstrap();
