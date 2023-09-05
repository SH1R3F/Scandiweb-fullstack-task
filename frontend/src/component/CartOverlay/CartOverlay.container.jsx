import CartOverlay from "./CartOverlay.component";
import {connect} from "react-redux";

const mapStateToProps = state => ({
    cartProducts: state.cart.cartProducts
})

export default connect(mapStateToProps, null)(CartOverlay);