import {configureStore} from "@reduxjs/toolkit";
import NavbarReducer from "./Navbar/Navbar.reducer";

export const store = configureStore({
    navbar: NavbarReducer
})