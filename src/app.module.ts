import { Module } from '@nestjs/common';
import { PostsModule } from './posts/posts.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RssModule } from './rss-parser/rss-parser.module';
import { ScheduleModule } from '@nestjs/schedule';
import * as dotenv from 'dotenv';

dotenv.config();

@Module({
  imports: [
    PostsModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.TYPEORM_HOST,
      port: +process.env.TYPEORM_PORT,
      username: process.env.TYPEORM_USERNAME,
      password: process.env.TYPEORM_PASSWORD,
      database: process.env.TYPEORM_DATABASE,
      autoLoadEntities: true,
      synchronize: true,
    }),
    RssModule,
    ScheduleModule.forRoot(),
  ],
})
export class AppModule {}
