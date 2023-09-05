import {connect} from "react-redux";
import ProductPage from "./ProductPage.component";
import ProductDispatcher from "../../store/Product/Product.dispatcher";

const mapStateToProps = state => ({
    product: state.product.product,
})

const mapDispatchToProps = dispatch => ({
    getProductPage: (productId) => ProductDispatcher.getProductPage(dispatch, productId)
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);