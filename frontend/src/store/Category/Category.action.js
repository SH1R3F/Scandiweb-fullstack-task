import {SET_CATEGORIES, SET_CATEGORY_PAGE} from "./Category.type";

export const setCategories = (categories) => ({
    type: SET_CATEGORIES,
    categories
})

export const setCategoryPage = (categoryPage) => ({
    type: SET_CATEGORY_PAGE,
    categoryPage
})