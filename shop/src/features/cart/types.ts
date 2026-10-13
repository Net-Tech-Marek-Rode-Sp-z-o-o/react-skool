import type {Product} from "../catalog/types.ts";

export type CartProduct = Pick<Product, 'id' | 'title' | 'price' | 'discountPercentage' | 'thumbnail'>

export type CartItem = {
    product: CartProduct
    quantity: number
}

export type CartTotals = {
    itemCount: number
    subtotal: number
    savings: number
    total: number
}