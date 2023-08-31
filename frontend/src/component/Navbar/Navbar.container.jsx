import Navbar from "./Navbar.component";
import {setMiniCartState} from "../../store/Navbar/Navbar.action";
import {connect} from "react-redux";

const mapStateToProps = state => {
    return {
        minicartStatus: state.navbar.status
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setMiniCartState: (status) => dispatch(setMiniCartState(status))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)