import {connect} from "react-redux";
import {updateCartProducts} from "../../store/Cart/Cart.action";
import ProductDetails from "./ProductDetails.component";

const mapStateToProps = (state) => ({
    cartProducts: state.cart.cartProducts
})

const mapDispatchToProps = (dispatch) => {
    return {
        updateCart: (products) => dispatch(updateCartProducts(products)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);