
export interface CartDto {
    userId: string,
    items: CartItemsDto[],
}

export interface CartItemsDto {
    productId: number
    quantity: number;
    size: number;
}

export interface RemoveItemFromCartDto {
    userId: string,
    productId: number
}