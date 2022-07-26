/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Order } from 'src/schemas/orderSchema';
import { OrderDto } from './dto/order.dto';


@Injectable()
export class OrderService {

  constructor(
    @InjectModel(Order.name) private readonly orderSchema: Model<Order>
  ) {}


  async findAll(): Promise<OrderDto> {
    const founderOrders = await this.orderSchema.find();

    console.log(founderOrders);


    return;

  }


  async findOne(id: string): Promise<OrderDto> {

    const foundedOrder = await this.orderSchema.findOne({ id: id });

    console.log(foundedOrder);
    return;
  }


}
