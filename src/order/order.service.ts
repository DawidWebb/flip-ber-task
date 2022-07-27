/* eslint-disable prettier/prettier */
import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Order } from 'src/schemas/orderSchema';
import { ProductDto } from "../product/dto/product.dto";

@Injectable()
export class OrderService {


  constructor(
    @InjectModel(Order.name) private readonly orderSchema: Model<Order>
  ) {}

  async findTop10Profitable(): Promise<ProductDto> {

    try {
      const allItemsFromOredrs = await this.orderSchema.aggregate([{ $project: { items: 1, } }]).exec();

      const allItemsWithValues = [];
      allItemsFromOredrs.map(order => order.items.map(item => {
        const chart = {
          id: item.product.id,
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
    } catch (error) {
      throw new InternalServerErrorException(`${ error.message }`);
    }
  }

  async findTop10MostOftenBought(): Promise<ProductDto> {

    try {
      const allItemsFromOredrs = await this.orderSchema.aggregate([{ $project: { items: 1, } }]).exec();

      if (!allItemsFromOredrs.length) {
        throw new NotFoundException("There is no data found!");
      }

      const allItems = [];
      allItemsFromOredrs.map(order => order.items.map(item => {
        const chart = {
          id: item.product.id,
          name: item.product.name,
          value: item.product.price,
        };
        allItems.push(chart);

      }));

      const groupedProducts = allItems.reduce((prev, next) => {
        const element = prev.find((item: { id: any; }) => item.id === next.id);
        let counter = 1;
        if (element) {
          return [...prev, {
            id: next.id,
            name: next.name,
            value: counter = counter + 1,
          }];
        } else {
          return [...prev, {
            id: next.id,
            name: next.name,
            value: counter,
          }];
        }

      }, []);

      const top10 = groupedProducts.sort((a, b) => {
        return b.value - a.value;
      }).splice(0, 10);

      return top10;
    } catch (error) {
      throw new InternalServerErrorException(`${ error.message }`);
    }
  }

  async findTop10MostOftenBoughtFromYestrd(): Promise<ProductDto> {
    try {
      const today = new Date();
      const yesterday = new Date(today.getTime() - 24 * 60 * 60 * 1000);

      const allItemsFromOredrs = await this.orderSchema.find(
        { "date": { $gte: `${ yesterday }` } },
        { items: 1 },
      ).exec();

      if (!allItemsFromOredrs.length) {
        throw new NotFoundException("There is no data found!");
      }

      if (!allItemsFromOredrs.length) {
        throw new NotFoundException("There is no data found!");
      }

      const allItems = [];
      allItemsFromOredrs.map(order => order.items.map(item => {
        const chart = {
          id: item.product.id,
          name: item.product.name,
          value: item.product.price,
        };
        allItems.push(chart);

      }));

      const groupedProducts = allItems.reduce((prev, next) => {
        const element = prev.find((item: { id: any; }) => item.id === next.id);
        let counter = 1;
        if (element) {
          return [...prev, {
            id: next.id,
            name: next.name,
            value: counter = counter + 1,
          }];
        } else {
          return [...prev, {
            id: next.id,
            name: next.name,
            value: counter,
          }];
        }

      }, []);

      const top10 = groupedProducts.sort((a, b) => {
        return b.value - a.value;
      }).splice(0, 10);

      return top10;
    }
    catch (error) {
      throw new InternalServerErrorException(`${ error.message }`);
    }

  }
}