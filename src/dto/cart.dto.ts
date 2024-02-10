
export interface CartDto {
    userId: number,
    items: CartItemsDto,
}

export interface CartItemsDto {
    productId: number
    quantity: number;
    size: number;
}