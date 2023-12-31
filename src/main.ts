require("dotenv").config();
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { APIPrefix } from './constant/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  app.setGlobalPrefix(APIPrefix.Version);
  const port = parseInt(process.env.NODE_PORT) || parseInt(process.env.SERVER_PORT);
  console.log('port ----> ', port)
  await app.listen(port);
}

bootstrap();