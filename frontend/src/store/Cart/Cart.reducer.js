import {
    DELETE_CART_PRODUCT,
    LOCALSTORAGE_CART_PRODUCTS, PLACE_ORDER,
    UPDATE_CART_PRODUCT_QTY,
    UPDATE_CART_PRODUCTS
} from "./Cart.type";

export const getInitialState = () => ({
    cartProducts: JSON.parse(localStorage.getItem(LOCALSTORAGE_CART_PRODUCTS) || "[]")
})

export const CartReducer = (state = getInitialState(), action) => {
    switch (action.type) {
        case UPDATE_CART_PRODUCTS:
            const {products} = action

            localStorage.setItem(LOCALSTORAGE_CART_PRODUCTS, JSON.stringify(products))
            return {
                ...state,
                cartProducts: products
            }

        case DELETE_CART_PRODUCT:
            const {productIndex} = action
            const cartProducts = JSON.parse(JSON.stringify(state.cartProducts))
            cartProducts.splice(productIndex, 1)
            localStorage.setItem(LOCALSTORAGE_CART_PRODUCTS, JSON.stringify(cartProducts))
            return {
                ...state,
                cartProducts
            }

        case UPDATE_CART_PRODUCT_QTY:
            const {index, quantity} = action
            const productsCart = JSON.parse(JSON.stringify(state.cartProducts))
            productsCart[index].quantity = quantity;

            localStorage.setItem(LOCALSTORAGE_CART_PRODUCTS, JSON.stringify(productsCart))
            return {
                ...state,
                cartProducts: productsCart
            }

        case PLACE_ORDER:
            localStorage.removeItem(LOCALSTORAGE_CART_PRODUCTS)
            return {
                ...state,
                cartProducts: []
            }

        default:
            return state;
    }
}

export default CartReducer;