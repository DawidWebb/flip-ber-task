/* eslint-disable prettier/prettier */
import { Date } from "mongoose";
import { CustomerDto } from "../../customer/dto/customer.dto";
import { ItemDto } from "../../item/dto/item.dto";

export class OrderDto {
    // _id: string;
    id: string;
    date: string;
    customer: CustomerDto;
    items: [ItemDto];
}
