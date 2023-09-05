export const cartProductsCount = (products) => {
    return products.reduce((total, product) => total + parseInt(product.quantity), 0);
}