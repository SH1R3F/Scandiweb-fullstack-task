import {SET_MINICART_OPEN} from "./Navbar.type";

export const getInitialState = () => ({
    status: false
})

export const NavbarReducer = (state = getInitialState(), action) => {
    switch (action.type) {
        case SET_MINICART_OPEN:
            const {status} = action;
            return {
                ...state,
                status
            };

        default:
            return state;
    }
}

export default NavbarReducer;