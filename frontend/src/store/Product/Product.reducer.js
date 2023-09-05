import {SET_PRODUCT_PAGE} from "./Product.type";

const getInitialState = () => ({
    product: {}
});

export const ProductReducer = (state = getInitialState(), action) => {
    switch (action.type) {
        case SET_PRODUCT_PAGE:
            return {
                ...state,
                product: action.product
            }

        default:
            return state;
    }
}

export default ProductReducer;