import ProductCard from "./ProductCard.component";
import {connect} from "react-redux";
import {updateCartProducts} from "../../store/Cart/Cart.action";

const mapStateToProps = (state) => ({
    cartProducts: state.cart.cartProducts
})
const mapDispatchToProps = (dispatch, product) => ({
    updateCart: (product) => dispatch(updateCartProducts(product))
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductCard);