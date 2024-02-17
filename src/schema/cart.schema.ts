import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'; 
import { CartItemsDto } from '../dto/cart.dto';

export type CartDocument = Cart & Document;

@Schema()
export class Cart{
    @Prop()
    userId: string; // phone number is treated as user id

    @Prop({default: []})
    cartItems: CartItemsDto[];
}

export const CartSchema = SchemaFactory.createForClass(Cart);