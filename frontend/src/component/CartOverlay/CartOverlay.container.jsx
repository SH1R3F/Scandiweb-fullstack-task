import CartOverlay from "./CartOverlay.component";
import {connect} from "react-redux";
import CartDispatcher from "../../store/Cart/Cart.dispatcher";

const mapStateToProps = state => ({
    cartProducts: state.cart.cartProducts
})

const mapDispatchToProps = dispatch => ({
    placeOrder: (cartProducts) => CartDispatcher.placeOrder(dispatch, cartProducts)
})

export default connect(mapStateToProps, mapDispatchToProps)(CartOverlay);