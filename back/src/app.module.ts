import { MiddlewareConsumer, Module, NestMiddleware, NestModule, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeORMConfig } from './configs/typeorm.config';
import { ConfigModule } from '@nestjs/config';
import { DiaryModule } from './diary/diary.module';
import { CsrfMiddleware } from './configs/csrf.middleware';

@Module({
  imports: [
    UserModule,
    ConfigModule.forRoot({
      cache: true,
      isGlobal: true,
      envFilePath: process.env.NODE_ENV === 'production' ? '.env' : '.env.dev'
    }),
    TypeOrmModule.forRoot(typeORMConfig),
    DiaryModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
  
export class AppModule implements NestModule{
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(CsrfMiddleware)
      .forRoutes({ path: 'api/diary/*', method: RequestMethod.ALL });
  }
}
