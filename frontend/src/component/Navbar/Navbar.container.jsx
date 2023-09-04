import Navbar from "./Navbar.component";
import {setMiniCartState} from "../../store/Navbar/Navbar.action";
import {connect} from "react-redux";
import CategoryDispatcher from "../../store/Category/Category.dispatcher";

const mapStateToProps = state => {
    return {
        minicartStatus: state.navbar.status,
        categories: state.category.categories
    }
}

const mapDispatchToProps = dispatch => ({
    setMiniCartState: (status) => dispatch(setMiniCartState(status)),
    setCategories: () => CategoryDispatcher.updateCategories(dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)