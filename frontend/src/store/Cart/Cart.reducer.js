import {UPDATE_CART_PRODUCTS} from "./Cart.type";

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

        default:
            return state;
    }
}

export default CartReducer;