export type Category = {
    slug: string
    name: string
    url: string
}

export type Dimension = {
    width: number
    height: number
    depth: number
}

export type Review = {
    rating: number
    comment: string
    date: string
    reviewerName: string
    reviewerEmail: string
}

export type ProductMeta = {
    createdAt: string
    updatedAt: string
    barcode: string
    qrCode: string
}

export type Product = {
    id: number
    title: string
    description: string
    category: string
    price: number
    discountPercentage: number
    rating: number
    stock: number
    tags: string[]
    brand?: string
    sku: string
    weight: number
    dimensions: Dimension
    warrantyInformation: string
    shippingInformation: string
    availabilityStatus: string
    reviews: Review[]
    returnPolicy: string
    minimumOrderQuantity: number
    meta: ProductMeta
    images: string[]
    thumbnail: string
}

export type ProductList = {
    products: Product[]
    total: number
    skip: number
    limit: number
}

export const PRODUCT_SORTS = [ 'price-asc', 'price-desc', 'rating-desc', 'title-asc'] as const
export type ProductSort = (typeof PRODUCT_SORTS)[number]

export type ProductParams = {
    limit?: number
    skip?: number
    sortBy?: 'title' | 'price' | 'rating'
    order?: 'asc' | 'desc'
}
