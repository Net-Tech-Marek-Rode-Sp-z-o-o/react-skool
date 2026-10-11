import { describe, expect, it } from 'vitest'
import { formatPrice } from './format.ts'

describe('formatPrice', () => {
    it.for([
        { amount: 9.99, format: '$9.99'},
        { amount: 1234.5, format: '$1,234.50'},
        { amount: 0, format: '$0.00'},
        { amount: -0, format: '-$0.00'},
        { amount: -8.99, format: '-$8.99'},
        { amount: 10.999, format: '$11.00'},
        { amount: 1.005, format: '$1.01'}
    ])('formats a price in US dollars', ({ amount, format }: {amount: number, format: string}): void => {
        expect(formatPrice(amount)).toBe(format);
    })
})