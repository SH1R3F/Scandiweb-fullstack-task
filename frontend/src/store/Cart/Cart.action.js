import {DELETE_CART_PRODUCT, PLACE_ORDER, UPDATE_CART_PRODUCT_QTY, UPDATE_CART_PRODUCTS} from "./Cart.type";

export const updateCartProducts = (products) => ({
    type: UPDATE_CART_PRODUCTS,
    products
})

export const deleteCartProduct = (productIndex) => ({
    type: DELETE_CART_PRODUCT,
    productIndex
})

export const updateCartProductQty = (index, quantity) => ({
    type: UPDATE_CART_PRODUCT_QTY,
    index,
    quantity
})
export const updatedPlacedOrder = () => ({
    type: PLACE_ORDER,
})