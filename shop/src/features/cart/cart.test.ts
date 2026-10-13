import {describe, expect, it} from 'vitest'
import {addItem, cartTotals, updateQuantity} from "./cart.ts";
import type {CartItem, CartProduct, CartTotals} from "./types.ts";

const mascara: CartProduct = Object.freeze({
    id: 1,
    title: 'Essence Mascara Lash Princess',
    price: 9.99,
    discountPercentage: 10.48,
    thumbnail: 'https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/thumbnail.webp',
})

const palette: CartProduct = Object.freeze({
    id: 2,
    title: 'Eyeshadow Palette with Mirror',
    price: 19.99,
    discountPercentage: 18.19,
    thumbnail: 'https://cdn.dummyjson.com/product-images/beauty/eyeshadow-palette-with-mirror/thumbnail.webp',
})

describe('addItem', () => {
    it('adds a new product with quantity 1 by default', () => {
        const items: CartItem[] = addItem([], mascara);

        expect(items).toEqual([{product: mascara, quantity: 1}])
    });

    it('increases the quantity when the product is already in the cart', () => {
        const items: CartItem[] = [{product: palette, quantity: 1}];

        const newItems: CartItem[] = addItem(items, palette);

        expect(newItems.length).toBe(1);
        expect(newItems).toEqual([{product: palette, quantity: 2}])
    })

    it('does not change the original array', () => {
        const items: CartItem[] = [{product: palette, quantity: 1}]

        const newItems: CartItem[] = addItem(items, palette);

        expect(items).toEqual([{product: palette, quantity: 1}])
        expect(newItems).toEqual([{product: palette, quantity: 2}])
    })
})

describe('updateQuantity', () => {
    it('sets the new quantity', () => {
        const items: CartItem[] = [{product: palette, quantity: 1}];

        const newItems: CartItem[] = updateQuantity(items, palette.id, 3);

        expect(newItems).toEqual([{product: palette, quantity: 3}]);
    });

    it('removes the item when the quantity is 0 or less', () => {
        const items: CartItem[] = [{product: palette, quantity: 1}];

        const newItems: CartItem[] = updateQuantity(items, palette.id, 0);

        expect(newItems.length).toBe(0);
    });

    it('leaves the items as they are for an unknown product id', () => {
        const items: CartItem[] = [{product: palette, quantity: 1}];
        const unknownProductId = 6

        const newItems: CartItem[] = updateQuantity(items, unknownProductId, 3);

        expect(newItems).toEqual(items);
    });
})

describe('cartTotals', () => {
    it('returns zeros for an empty cart', () => {
        const totals: CartTotals = cartTotals([]);

        expect(totals).toEqual({
            itemCount: 0,
            subtotal: 0,
            savings: 0,
            total: 0,
        });
    });

    it('returns subtotal 19.98, savings 2.1 and total 17.88 for two mascaras', () => {
        const items: CartItem[] = [{product: mascara, quantity: 1}, {product: mascara, quantity: 1}];

        const totals: CartTotals = cartTotals(items);

        expect(totals).toEqual({
            itemCount: 2,
            subtotal: 19.98,
            savings: 2.1,
            total: 17.88,
        });
    });
})