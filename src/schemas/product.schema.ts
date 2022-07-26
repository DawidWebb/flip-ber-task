/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema()
export class Product extends Document {
    @Prop()
    id: string;
    @Prop()
    name: string;
    @Prop()
    price: string;
}

export const ProductSchema = SchemaFactory.createForClass(Product);