export type PaymentMethod =
    | { type: 'card'; cardNumber: string; expiry: string; cvc: string }
    | { type: 'blik'; code: string }
    | { type: 'cash-on-delivery' }

export const PAYMENT_TYPES = ['card', 'blik', 'cash-on-delivery'] as const satisfies readonly PaymentMethod['type'][]
export type PaymentType = (typeof PAYMENT_TYPES)[number]
