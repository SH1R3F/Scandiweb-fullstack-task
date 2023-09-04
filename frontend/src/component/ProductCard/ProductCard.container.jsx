import ProductCard from "./ProductCard.component";
import {connect} from "react-redux";
import {addProductToCart} from "../../store/Cart/Cart.action";

const mapStateToProps = (state) => ({})
const mapDispatchToProps = (dispatch, product) => ({
    addToCart: (product) => dispatch(addProductToCart(product))
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductCard);