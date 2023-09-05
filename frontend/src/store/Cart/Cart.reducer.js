import {DELETE_CART_PRODUCT, UPDATE_CART_PRODUCT_QTY, UPDATE_CART_PRODUCTS} from "./Cart.type";

export const getInitialState = () => ({
    cartProducts: []
})

export const CartReducer = (state = getInitialState(), action) => {
    switch (action.type) {
        case UPDATE_CART_PRODUCTS:
            const {products} = action
            return {
                ...state,
                cartProducts: products
            }

        case DELETE_CART_PRODUCT:
            const {productIndex} = action
            const cartProducts = [...state.cartProducts]
            cartProducts.splice(productIndex, 1)
            return {
                ...state,
                cartProducts
            }

        case UPDATE_CART_PRODUCT_QTY:
            const {index, quantity} = action
            const productsCart = JSON.parse(JSON.stringify(state.cartProducts))
            productsCart[index].quantity = quantity;
            return {
                ...state,
                cartProducts: productsCart
            }

        default:
            return state;
    }
}

export default CartReducer;