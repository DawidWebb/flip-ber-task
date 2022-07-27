/* eslint-disable prettier/prettier */
import { Controller, Get } from '@nestjs/common';
import { OrderService } from './order.service';


@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Get('/top-ten-profitable')
  findTop10Profitable() {
    return this.orderService.findTop10Profitable();
  }

  @Get('/top-ten-most-often-bought')
  findTop10MostOftenBought() {
    return this.orderService.findTop10MostOftenBought();
  }


  @Get('/top-ten-most-often-bought-from-yestrd')
  findTop10MostOftenBoughtFromYestrd() {
    return this.orderService.findTop10MostOftenBoughtFromYestrd();
  }

}
