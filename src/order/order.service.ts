/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Order } from 'src/schemas/orderSchema';
import { OrderDto } from './dto/order.dto';
import { ProductDto } from "../product/dto/product.dto";
import { emit } from 'process';
import { access } from 'fs';


@Injectable()
export class OrderService {


  constructor(
    @InjectModel(Order.name) private readonly orderSchema: Model<Order>
  ) {}

  async findTop10Profitable(): Promise<ProductDto> {

    const allItemsFromOredrs = await this.orderSchema.aggregate([{ $project: { items: 1, } }]).exec();

    const allItemsWithValues = [];
    allItemsFromOredrs.map(order => order.items.map(item => {
      const chart = {
        id: item.product.id.toString(),
        name: item.product.name,
        value: Number(item.product.price) * item.quantity,
      };
      allItemsWithValues.push(chart);

    }));


    const groupedProducts = allItemsWithValues.reduce((prev, next) => {
      const element = prev.find((item: { id: any; }) => item.id === next.id);
      if (element) {
        return [...prev, {
          id: next.id,
          name: next.name,
          value: next.value + element.value
        }];
      } else {
        return [...prev, next];
      }

    }, []);

    const top10 = groupedProducts.sort((a, b) => {
      return b.value - a.value;
    }).splice(0, 10);

    return top10;
  }


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
