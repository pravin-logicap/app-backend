import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe, Logger } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import basicAuth from 'express-basic-auth';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }));
  app.enableCors({ origin: '*'});
  app.use((req: any, res: any, next: any) => {
    Logger.log(`API called ${req.method} ${req.originalUrl}`, 'HTTP');
    const start = Date.now();
    res.on('finish', () => {
      Logger.log(`${req.method} ${req.originalUrl} -> ${res.statusCode} ${Date.now() - start}ms`, 'HTTP');
    });
    next();
  });

  // Swagger basic auth
  const swaggerUser = process.env.SWAGGER_USER || 'admin';
  const swaggerPass = process.env.SWAGGER_PASS || 'admin';
  app.use(['/docs', '/docs-json'], basicAuth({ users: { [swaggerUser]: swaggerPass }, challenge: true }));

  // Swagger setup
  const config = new DocumentBuilder()
    .setTitle('Recruitment API')
    .setDescription('API documentation')
    .setVersion('1.0')
    .addBearerAuth({ type: 'http', scheme: 'bearer', bearerFormat: 'JWT' }, 'JWT')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document, {
    swaggerOptions: { persistAuthorization: true },
  });

  const port = Number(process.env.PORT) || 3002;
  await app.listen(port);
  const url = await app.getUrl();
  Logger.log(`Service started on ${url} (Swagger at ${url}/docs)`, 'Bootstrap');
}
bootstrap();
