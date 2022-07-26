/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CustomerDto } from './dto/customer.dto';


@Injectable()
export class CustomerService {
  create(customerDto: CustomerDto) {
    return 'This action adds a new customer';
  }

  findAll() {
    return `This action returns all customer`;
  }

  findOne(id: number) {
    return `This action returns a #${ id } customer`;
  }

  remove(id: number) {
    return `This action removes a #${ id } customer`;
  }
}
