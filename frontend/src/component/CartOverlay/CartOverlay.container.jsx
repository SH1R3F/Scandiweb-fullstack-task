import React, {PureComponent} from 'react';
import CartOverlay from "./CartOverlay.component";
import {connect} from "react-redux";

const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => ({

})

class CartOverlayContainer extends PureComponent {
    render() {
        return <CartOverlay/>;
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartOverlayContainer);