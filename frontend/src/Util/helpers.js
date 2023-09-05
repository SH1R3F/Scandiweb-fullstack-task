export const cartProductsCount = (products) => {
    return products.reduce((total, product) => total + parseInt(product.quantity), 0);
}

export const sameVariant = (cartProduct, clonedProduct) => {
    if (!cartProduct || !clonedProduct) {
        return false;
    }

    // Check same product
    if (cartProduct.id !== clonedProduct.id) {
        return false;
    }

    // Check same attributes
    for (const i of Object.keys(cartProduct.attrs)) {
        for (const n of Object.keys(cartProduct.attrs[i].items)) {
            if (clonedProduct.attrs[i].items[n].selected === true && !cartProduct.attrs[i].items[n].selected) {
                return false;
            }
        }
    }

    return true;
}

export const addOrAppendToCart = (cartProducts, product) => {
    let newCartProducts;

    if (sameVariant(cartProducts.find(cartProduct => cartProduct.id === product.id), product)) {
        const clonedCartProducts = JSON.parse(JSON.stringify(cartProducts));

        // Increase quantity if already existed in cart
        newCartProducts = clonedCartProducts.map((cartProduct) => {
            if (sameVariant(cartProduct, product)) {
                cartProduct.quantity += 1;
            }
            return cartProduct;
        })

    } else {
        const clonedProduct = JSON.parse(JSON.stringify(product))

        // Add to cart if didn't exist
        clonedProduct.quantity = 1;
        newCartProducts = [...cartProducts, clonedProduct];

    }
    return newCartProducts;
}