import {configureStore} from "@reduxjs/toolkit";
import NavbarReducer from "./Navbar/Navbar.reducer";
import CategoryReducer from "./Category/Category.reducer";

export const store = configureStore({
    reducer: {
        navbar: NavbarReducer,
        category: CategoryReducer
    }
})