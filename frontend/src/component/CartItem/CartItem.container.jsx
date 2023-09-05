import CartItem from "./CartItem.component";
import {connect} from "react-redux";
import {deleteCartProduct, updateCartProductQty} from "../../store/Cart/Cart.action";

const mapDispatchToProps = (dispatch) => ({
    deleteProduct: (productIndex) => dispatch(deleteCartProduct(productIndex)),
    updateCartProductQty: (index, quantity) => dispatch(updateCartProductQty(index, quantity))
})

export default connect(null, mapDispatchToProps)(CartItem)