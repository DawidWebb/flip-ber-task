/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
import { ProductDto } from "../product/dto/product.dto";


@Schema()
export class Item extends Document {
    @Prop()
    item: [ProductDto];
    @Prop()
    quantity: number;
}

export const ItemSchema = SchemaFactory.createForClass(Item);