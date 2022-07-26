/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductModule } from './product/product.module';
import { OrderModule } from './order/order.module';
import { CustomerModule } from './customer/customer.module';
import { ItemModule } from './item/item.module';


@Module({
  imports: [ConfigModule.forRoot(), MongooseModule.forRoot(process.env.MONGO_DB_CONNECT), ProductModule, OrderModule, CustomerModule, ItemModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
