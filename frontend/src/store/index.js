import {configureStore} from "@reduxjs/toolkit";
import NavbarReducer from "./Navbar/Navbar.reducer";
import CategoryReducer from "./Category/Category.reducer";
import CartReducer from "./Cart/Cart.reducer";
import ProductReducer from "./Product/Product.reducer";

export const store = configureStore({
    reducer: {
        navbar: NavbarReducer,
        category: CategoryReducer,
        cart: CartReducer,
        product: ProductReducer
    }
})