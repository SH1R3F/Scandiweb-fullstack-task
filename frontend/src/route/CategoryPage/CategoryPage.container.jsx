import React, {PureComponent} from 'react';
import CategoryPage from "./CategoryPage.component";
import {connect} from "react-redux";
import CategoryDispatcher from "../../store/Category/Category.dispatcher";

const mapStateToProps = state => ({
    products: state.category.products,
})

const mapDispatchToProps = dispatch => ({
    setProducts: () => CategoryDispatcher.updateProducts(dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(CategoryPage);