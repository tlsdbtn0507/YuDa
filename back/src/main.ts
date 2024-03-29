import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as config from 'config';
import * as cookieParser from 'cookie-parser';

const serverConfig = config.get('server');

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: {
      origin: true,
      credentials: true,
    }
  });
  // const port = serverConfig.get('port');
  const port = process.env.HOSTPORT;

  app.use(cookieParser());

  await app.listen(port);
}
bootstrap();
