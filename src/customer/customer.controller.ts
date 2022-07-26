/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { CustomerDto } from './dto/customer.dto';


@Controller('customer')
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  @Post()
  create(@Body() customerDto: CustomerDto) {
    return this.customerService.create(customerDto);
  }

  @Get()
  findAll() {
    return this.customerService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.customerService.findOne(+id);
  }


  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.customerService.remove(+id);
  }
}
