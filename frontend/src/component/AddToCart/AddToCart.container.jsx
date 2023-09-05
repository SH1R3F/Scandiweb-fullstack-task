import {setMiniCartState} from "../../store/Navbar/Navbar.action";
import {connect} from "react-redux";
import AddToCart from "./AddToCart.component";
import {cartProductsCount} from "../../Util/helpers";

const mapStateToProps = (state) => {
    return {
        minicartStatus: state.navbar.status,
        cartProductsCount: cartProductsCount(state.cart.cartProducts)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setMiniCartState: (status) => dispatch(setMiniCartState(status))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddToCart);