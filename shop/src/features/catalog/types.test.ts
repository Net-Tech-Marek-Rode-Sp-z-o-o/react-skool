import {describe, expect, it} from 'vitest'
import type {ProductList} from './types.ts'
import productsJson from '../../fixtures/products.json'

const list: ProductList = productsJson

describe('products fixture', () => {
    it('has as many products as the limit', () => {
        expect(list.products).toHaveLength(list.limit)
    })

    it('has the mascara with its dimensions', () => {
        const mascara = list.products.find(product => product.id === 1)

        expect(mascara?.title).toBe('Essence Mascara Lash Princess')
        expect(mascara?.dimensions).toEqual({width: 15.14, height: 13.08, depth: 22.99})
    })
})
