/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Date, Document } from "mongoose";
import { CustomerDto } from "../customer/dto/customer.dto";
import { ItemDto } from "../item/dto/item.dto";

@Schema()
export class Order extends Document {
    // @Prop()
    // _id: string;
    @Prop()
    id: string;
    @Prop()
    date: string;
    @Prop()
    customer: CustomerDto;
    @Prop()
    items: [ItemDto];
}

export const OrderSchema = SchemaFactory.createForClass(Order);