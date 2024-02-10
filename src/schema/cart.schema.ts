import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'; 
import { CartItemsDto } from '../dto/cart.dto';

export type CartDocument = Cart & Document;

@Schema()
export class Cart{
    @Prop()
    userId: number;

    @Prop()
    cartItems: CartItemsDto;
}

export const CartSchema = SchemaFactory.createForClass(Cart);