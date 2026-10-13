import {describe, expect, it} from 'vitest'
import {describePayment} from './payment.ts'

describe('describePayment', () => {
    it('shows the last four digits of a card', () => {
        expect(describePayment({type: 'card', cardNumber: '4000 0566 5566 5556', expiry: '12/28', cvc: '123'}))
            .toBe('Card ending in 5556')
    })

    it('ignores spaces at the end of a card number', () => {
        expect(describePayment({type: 'card', cardNumber: '4111 1111 1111 1234 ', expiry: '12/28', cvc: '123'}))
            .toBe('Card ending in 1234')
    })

    it('describes BLIK', () => {
        expect(describePayment({type: 'blik', code: '123456'})).toBe('BLIK')
    })

    it('describes cash on delivery', () => {
        expect(describePayment({type: 'cash-on-delivery'})).toBe('Cash on delivery')
    })
})
