import {SET_CATEGORIES, SET_PRODUCTS} from "./Category.type";

export const getInitialState = () => ({
    categories: [],
    products: []
});


export const CategoryReducer = (state = getInitialState(), action) => {
    switch (action.type) {
        case SET_CATEGORIES:
            const {categories} = action;
            return {
                ...state,
                categories
            }

        case SET_PRODUCTS:
            const {products} = action;
            return {
                ...state,
                products
            }

        default:
            return state;
    }
}

export default CategoryReducer;