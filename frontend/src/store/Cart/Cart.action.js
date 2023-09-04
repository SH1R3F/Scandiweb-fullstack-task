import {ADD_PRODUCT_TO_CART} from "./Cart.type";

export const addProductToCart = (product) => ({
    type: ADD_PRODUCT_TO_CART,
    product
})