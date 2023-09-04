import React, {PureComponent} from 'react';
import CategoryPage from "./CategoryPage.component";
import {connect} from "react-redux";
import CategoryDispatcher from "../../store/Category/Category.dispatcher";

const mapStateToProps = state => ({
    categoryPage: state.category.categoryPage,
})

const mapDispatchToProps = dispatch => {
    return {
        getCategoryPage: (categoryId) => CategoryDispatcher.getCategoryPage(dispatch, categoryId)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryPage);