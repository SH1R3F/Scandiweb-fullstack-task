import {ADD_PRODUCT_TO_CART} from "./Cart.type";

export const getInitialState = () => ({
    cartProducts: []
})

export const CartReducer = (state = getInitialState(), action) => {
    switch (action.type) {
        case ADD_PRODUCT_TO_CART:
            const {product} = action
            return {
                ...state,
                cartProducts: [...state.cartProducts, product]
            }

        default:
            return state;
    }
}

export default CartReducer;