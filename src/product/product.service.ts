/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { ProductDto } from './dto/product.dto';


@Injectable()
export class ProductService {


  findAll() {
    return `This action returns all product`;
  }

  findOne(id: number) {
    return `This action returns a #${ id } product`;
  }


  remove(id: number) {
    return `This action removes a #${ id } product`;
  }
}
