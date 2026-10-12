export type CartProduct = {
    id: number
    title: string
    price: number
    discountPercentage: number
    thumbnail: string
}

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


export function finalPrice(item: CartProduct): number {
    return Math.round(item.price * (1 - item.discountPercentage / 100) * 100 ) / 100;
}

export function lineTotal(item: CartItem): number {
    return Math.round(item.quantity * finalPrice(item.product) * 100 ) / 100;
}

export function lineDiscount(item: CartProduct): number {
    return Math.round(item.price * item.discountPercentage) / 100;
}

export function addItem(items: CartItem[], item: CartProduct, quantity: number = 1): CartItem[] {
    const hasItem: CartItem | undefined = items.find((prevItem: CartItem): boolean => prevItem.product.id === item.id);

    if (!hasItem) {
        return [... items, {product: item, quantity: quantity}];
    }

    return items.map<CartItem>((prevItem: CartItem): CartItem => prevItem.product.id === item.id
        ? {product: item, quantity: quantity + prevItem.quantity}
        : prevItem);
}

export function updateQuantity(items: CartItem[], productId: number, quantity: number): CartItem[] {
    const hasItem: CartItem | undefined = items.find((prevItem: CartItem): boolean => prevItem.product.id === productId);

    if  (!hasItem) {
        return items;
    }

    if (quantity < 1) {
        return removeItem(items, productId);
    }

    return items.map<CartItem>((prevItem: CartItem): CartItem => prevItem.product.id === productId
        ? {product: prevItem.product, quantity: quantity}
        : prevItem);
}

export function removeItem(items: CartItem[], productId: number): CartItem[] {
    return items.filter(item => item.product.id !== productId);
}

export function cartTotals(items: CartItem[]): CartTotals
{
    const total: number = items.reduce((total: number, item: CartItem): number => total + lineTotal(item), 0);
    const savings: number = items.reduce((total: number, item: CartItem): number => total + item.quantity * lineDiscount(item.product), 0);

    return {
        itemCount: items.reduce((total: number, item: CartItem): number => total + item.quantity, 0),
        subtotal: total + savings,
        savings: savings,
        total: total,
    }
}
