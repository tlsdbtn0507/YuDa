import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as config from 'config';

const dbConfig = config.get('db');

export const typeORMConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: process.env.POSTGRES_HOST,
  port: +process.env.POSTGRES_PORT || dbConfig.port,
  username: process.env.POSTGRES_USERNAME || dbConfig.username,
  password: process.env.POSTGRES_PASSWORD || dbConfig.password,
  database: process.env.POSTGRES_DATABASE || dbConfig.database,
  entities: [__dirname + "/../**/*.entity.{js,ts}"],
  synchronize: !!process.env.POSTGRES_SYNCHRONIZE || dbConfig.synchronize,
  // ... process.env.NODE_ENV === 'production' && sslConfig  
}

console.log(typeORMConfig)