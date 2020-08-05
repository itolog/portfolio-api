import { Module , CacheModule, CacheInterceptor } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { MailerModule } from '@nestjs-modules/mailer';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HomeModule } from './home/home.module';
import { WorksModule } from './works/works.module';
import { SkillsModule } from './skills/skills.module';
import { MailModule } from './mail/mail.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    CacheModule.register({
      ttl: 3600
    }),
    MongooseModule.forRoot(`${process.env.MONGO_URL}`, {
      useNewUrlParser: true,
    }),
    MailerModule.forRoot({
      transport: {
        ssl: true,
        authentication: true,
        secure: true,
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASSWORD,
        },
      }
    }),
    HomeModule,
    WorksModule,
    SkillsModule,
    MailModule,
  ],
  controllers: [AppController],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: CacheInterceptor,
    },
    AppService],
})
export class AppModule {}
