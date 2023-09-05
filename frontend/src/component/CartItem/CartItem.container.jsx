import CartItem from "./CartItem.component";
import {connect} from "react-redux";
import {deleteCartProduct} from "../../store/Cart/Cart.action";

const mapDispatchToProps = (dispatch) => ({
    deleteProduct: (productIndex) => dispatch(deleteCartProduct(productIndex))
})

export default connect(null, mapDispatchToProps)(CartItem)