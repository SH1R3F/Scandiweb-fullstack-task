import {PureComponent} from "react";

import './CategoryPage.style.scss'
import ProductCard from "../../component/ProductCard/ProductCard.container";
import {withParams} from "../withParams";

class CategoryPageComponent extends PureComponent {
    componentDidMount() {
        const {params, getCategoryPage} = this.props
        getCategoryPage(params.categoryId)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        const {params, getCategoryPage} = this.props
        const {categoryId: prevCategoryId} = prevProps.params

        if (params.categoryId !== prevCategoryId) {
            getCategoryPage(this.props.params.categoryId)
        }
    }


    render() {
        const {categoryPage = []} = this.props

        if (categoryPage.length === 0) {
            return <div>Loading...</div>;
        }

        return (
            <div className="CategoryPage">
                <h1 className="CategoryPage-Title">{categoryPage.name}</h1>
                <div className="CategoryPage-Products">
                    {categoryPage.products.map((product) => <ProductCard product={product} key={product.id} />)}
                </div>
            </div>
        );
    }
}

export default withParams(CategoryPageComponent);