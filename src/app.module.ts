/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { Top10profProdModule } from './top10prof-prod/top10prof-prod.module';

@Module({
  imports: [ConfigModule.forRoot(), MongooseModule.forRoot(process.env.MONGO_DB_CONNECT), Top10profProdModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
