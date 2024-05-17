import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as config from 'config';
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
  const portConfig = config.get('server');
  const app = await NestFactory.create(AppModule, {
    cors: {
      origin: true,
      credentials: true,
    }
  });
  const port = process.env.POSTGRES_HOSTPORT || portConfig.port;

  app.use(cookieParser());

  await app.listen(port);
}
bootstrap();
