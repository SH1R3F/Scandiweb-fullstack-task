import {setMiniCartState} from "../../store/Navbar/Navbar.action";
import {connect} from "react-redux";
import HomePage from "./HomePage.component";
import {clearOrderMessage} from "../../store/Cart/Cart.action";


const mapStateToProps = (state) => {
    return {
        minicartStatus: state.navbar.status,
        placedOrderMessage: state.cart.placedOrderMessage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setMiniCartState: (status) => dispatch(setMiniCartState(status)),
        clearOrderMessage: (status) => dispatch(clearOrderMessage(status)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);