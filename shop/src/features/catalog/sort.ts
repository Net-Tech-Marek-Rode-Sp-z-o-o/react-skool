import {type Product, PRODUCT_SORTS, type ProductSort} from "./types.ts";

export function sortProducts(products: readonly Product[], sort: ProductSort): Product[] {
    switch (sort) {
        case "price-asc":
            return products.toSorted((a: Product, b: Product): number => a.price - b.price);
        case "price-desc":
            return products.toSorted((a: Product, b: Product): number => b.price - a.price);
        case "rating-desc":
            return products.toSorted((a: Product, b: Product): number => b.rating - a.rating);
        case "title-asc":
            return products.toSorted((a: Product, b: Product): number => a.title.localeCompare(b.title));
        default: {
            const unhandled: never = sort;
            throw new Error(`Unhandled sort: ${JSON.stringify(unhandled)}`);
        }
    }
}

export function isProductSort(value: string): value is ProductSort {
    return (PRODUCT_SORTS as readonly string[]).includes(value);
}
