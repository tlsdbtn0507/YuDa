import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeORMConfig } from './configs/typeorm.config';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    UserModule,
    ConfigModule.forRoot({
      cache: true,
      isGlobal: true,
      envFilePath:'.env'
    }),
    TypeOrmModule.forRoot(typeORMConfig),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
