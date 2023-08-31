import {SET_MINICART_OPEN} from "./Navbar.type";

export const setMiniCartState = (status) => ({
    type: SET_MINICART_OPEN,
    status
})