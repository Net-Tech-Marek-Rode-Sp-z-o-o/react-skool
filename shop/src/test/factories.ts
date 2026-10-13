import type {Product} from "../features/catalog/types.ts";

export function makeProduct(fields: Pick<Product, 'id' | 'title' | 'price' | 'rating'>): Product {
    return {
        description: '',
        category: 'beauty',
        discountPercentage: 0,
        stock: 10,
        tags: [],
        sku: '',
        weight: 1,
        dimensions: {width: 1, height: 1, depth: 1},
        warrantyInformation: '',
        shippingInformation: '',
        availabilityStatus: 'In Stock',
        reviews: [],
        returnPolicy: '',
        minimumOrderQuantity: 1,
        meta: {createdAt: '', updatedAt: '', barcode: '', qrCode: ''},
        images: [],
        thumbnail: '',
        ...fields,
    }
}