import {UPDATE_CART_PRODUCTS} from "./Cart.type";

export const updateCartProducts = (products) => ({
    type: UPDATE_CART_PRODUCTS,
    products
})