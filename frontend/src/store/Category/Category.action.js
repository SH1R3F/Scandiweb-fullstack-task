import {SET_CATEGORIES, SET_PRODUCTS} from "./Category.type";

export const setCategories = (categories) => ({
    type: SET_CATEGORIES,
    categories
})

export const setProducts = (products) => ({
    type: SET_PRODUCTS,
    products
})