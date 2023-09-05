export const cartProductsCount = (products) => {
    return products.reduce((total, product) => total + product.quantity, 0);
}