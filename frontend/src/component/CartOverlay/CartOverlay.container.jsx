import React, {PureComponent} from 'react';
import CartOverlay from "./CartOverlay.component";
import {connect} from "react-redux";

const mapStateToProps = state => ({
    cartProducts: state.cart.cartProducts
})

const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(CartOverlay);