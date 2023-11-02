import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const SmeeClient = require('smee-client');

  const smee = new SmeeClient({
    source: 'https://smee.io/blSo8OuqaqO5dz',
    target: 'http://localhost:3000/webhook/github',
    logger: console,
  });

  const events = smee.start();
  await app.listen(3000);
}

bootstrap();