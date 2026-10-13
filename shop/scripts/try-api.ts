import {getProducts} from "../src/lib/api-client.ts";
import {formatPrice} from "../src/lib/format.ts";

const list = await getProducts({
    limit: 3,
    sortBy: 'price',
    order: 'desc'
});

for (const product of list.products) {
    console.log(`${product.title} - ${formatPrice(product.price)}`);
}
