/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ItemService } from './item.service';
import { ItemDto } from './dto/item.dto';


@Controller('item')
export class ItemController {
  constructor(private readonly itemService: ItemService) {}

  @Post()
  create(@Body() itemDto: ItemDto) {
    return this.itemService.create(itemDto);
  }

  @Get()
  findAll() {
    return this.itemService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.itemService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.itemService.remove(+id);
  }
}
