import type {Category, Product, ProductList, ProductParams} from "../features/catalog/types.ts"

export const API_URL = 'https://dummyjson.com'

export class ApiError extends Error {
    readonly status: number
    readonly url: string

    constructor(status: number, url: string) {
        super(`API error ${status}: ${url}`)
        this.name = 'ApiError'
        this.status = status
        this.url = url
    }
}

async function getJson<T>(path: string): Promise<T>
{
    const url = `${API_URL}${path}`
    const response: Response = await fetch(url)

    if (!response.ok) {
        throw new ApiError(response.status, url)
    }

    return (await response.json()) as T
}

export async function getProducts(params: ProductParams = {}): Promise<ProductList>
{
    const query = new URLSearchParams()

    if (params.limit !== undefined) query.set('limit', String(params.limit))
    if (params.skip !== undefined) query.set('skip', String(params.skip))
    if (params.sortBy !== undefined) query.set('sortBy', params.sortBy)
    if (params.order !== undefined) query.set('order', params.order)

    const queryString = query.toString()

    return getJson<ProductList>(queryString === '' ? '/products' : `/products?${queryString}`)
}

export async function getProduct(id: number): Promise<Product>
{
    return getJson<Product>(`/products/${id}`)
}

export async function getCategories(): Promise<Category[]>
{
    return getJson<Category[]>('/products/categories')
}
