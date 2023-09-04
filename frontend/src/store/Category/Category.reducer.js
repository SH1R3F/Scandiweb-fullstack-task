import {SET_CATEGORIES} from "./Category.type";

export const getInitialState = () => ({
    categories: []
});


export const CategoryReducer = (state = getInitialState(), {type, categories}) => {
    switch (type) {
        case SET_CATEGORIES:
            return {
                ...state,
                categories
            }

        default:
            return state;
    }
}

export default CategoryReducer;