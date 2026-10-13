import type {PaymentMethod} from "./types.ts";

export function describePayment(method: PaymentMethod): string {
    switch (method.type) {
        case 'card':
            return `Card ending in ${method.cardNumber.replaceAll(' ', '').slice(-4)}`;
        case 'blik':
            return 'BLIK';
        case 'cash-on-delivery':
            return 'Cash on delivery';
        default: {
            const unhandled: never = method;
            throw new Error(`Unhandled payment method: ${JSON.stringify(unhandled)}`);
        }
    }
}
