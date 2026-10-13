import {describe, expect, it} from 'vitest'
import {isProductSort, sortProducts} from './sort.ts'
import type {Product} from './types.ts'
import {makeProduct} from "../../test/factories.ts";

const mascara: Product = Object.freeze(
    makeProduct({id: 1, title: 'Essence Mascara Lash Princess', price: 9.99, rating: 2.56}),
)

const palette: Product = Object.freeze(
    makeProduct({id: 2, title: 'Eyeshadow Palette with Mirror', price: 19.99, rating: 2.86}),
)

const powder: Product = Object.freeze(
    makeProduct({id: 3, title: 'Powder Canister', price: 14.99, rating: 4.64}),
)

const products: readonly Product[] = Object.freeze([palette, mascara, powder])

describe('sortProducts', () => {
    it('sorts by price, lowest first', () => {
        expect(sortProducts(products, 'price-asc')).toEqual([mascara, powder, palette])
    })

    it('sorts by price, highest first', () => {
        expect(sortProducts(products, 'price-desc')).toEqual([palette, powder, mascara])
    })

    it('sorts by rating, highest first', () => {
        expect(sortProducts(products, 'rating-desc')).toEqual([powder, palette, mascara])
    })

    it('sorts by title, A to Z', () => {
        expect(sortProducts(products, 'title-asc')).toEqual([mascara, palette, powder])
    })

    it('leaves the input in its original order', () => {
        sortProducts(products, 'price-asc')

        expect(products).toEqual([palette, mascara, powder])
    })
})

describe('isProductSort', () => {
    it('accepts a known sort', () => {
        expect(isProductSort('rating-desc')).toBe(true)
    })

    it('rejects an unknown sort', () => {
        expect(isProductSort('stock-desc')).toBe(false)
    })
})
