import {SET_CATEGORIES, SET_CATEGORY_PAGE} from "./Category.type";

export const getInitialState = () => ({
    categories: [],
    categoryPage: []
});


export const CategoryReducer = (state = getInitialState(), action) => {
    switch (action.type) {
        case SET_CATEGORIES:
            const {categories} = action;
            return {
                ...state,
                categories
            }

        case SET_CATEGORY_PAGE:
            const {categoryPage} = action;
            return {
                ...state,
                categoryPage
            }

        default:
            return state;
    }
}

export default CategoryReducer;