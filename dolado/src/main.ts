import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';
import * as env from 'dotenv';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

env.config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);



  app.useGlobalPipes(new ValidationPipe());

  const config = new DocumentBuilder()
    .setTitle('Test Dolado')
    .setDescription('Teste de admissão Dolado')
    .setVersion('1.0')
    .addTag('dolado')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('swagger', app, document);

  await app.listen(process.env.PORT);
}
bootstrap();
