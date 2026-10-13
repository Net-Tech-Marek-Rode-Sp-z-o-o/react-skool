import { afterEach, expect, it, vi } from 'vitest'
import type {Product, ProductList, ProductParams} from '../features/catalog/types'
import {API_URL, ApiError, getProduct, getProducts} from './api-client'
import {makeProduct} from "../test/factories.ts";

afterEach(() => {
    vi.restoreAllMocks()
})

it('requests /products without a query string when no params are given', async () => {
    const productList: ProductList = { products: [], total: 0, skip: 0, limit: 0 }
    const fetchSpy = vi
        .spyOn(globalThis, 'fetch')
        .mockResolvedValue(new Response(JSON.stringify(productList), { status: 200 }))

    await getProducts()

    expect(fetchSpy).toHaveBeenCalledWith(`${API_URL}/products`)
})

const mascara: Product = Object.freeze(
    makeProduct({id: 1, title: 'Essence Mascara Lash Princess', price: 9.99, rating: 2.56}),
)

it('requests /products with a query string when all params are given', async () => {
    const productList: ProductList = { products: [mascara], total: 1, skip: 1, limit: 1 }
    const fetchSpy = vi
        .spyOn(globalThis, 'fetch')
        .mockResolvedValue(new Response(JSON.stringify(productList), { status: 200 }))

    const params: ProductParams = {
        limit: 1,
        skip: 1,
        sortBy: 'title',
        order: 'asc',
    };

    await getProducts(params)

    expect(fetchSpy).toHaveBeenCalledWith(`${API_URL}/products?limit=1&skip=1&sortBy=title&order=asc`)
})

it('requests /products/{id} for the given id', async () => {
    const fetchSpy = vi
        .spyOn(globalThis, 'fetch')
        .mockResolvedValue(new Response(JSON.stringify(mascara), { status: 200 }))

    await getProduct(mascara.id)

    expect(fetchSpy).toHaveBeenCalledWith(`${API_URL}/products/1`)
})

it('returns the parsed product', async () => {
    vi.spyOn(globalThis, 'fetch').mockResolvedValue(
        new Response(JSON.stringify(mascara), { status: 200 }),
    )

    const product = await getProduct(mascara.id)

    expect(product).toEqual(mascara)
})

it('throws ApiError with the status and url when the response is 404', async () => {
    vi.spyOn(globalThis, 'fetch').mockResolvedValue(
        new Response(JSON.stringify({ message: "Product with id '999' not found" }), { status: 404 }),
    )

    const request = getProduct(999)

    await expect(request).rejects.toBeInstanceOf(ApiError)
    await expect(request).rejects.toMatchObject({ status: 404, url: `${API_URL}/products/999` })
})