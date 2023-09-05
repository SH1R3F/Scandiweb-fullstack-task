import {PureComponent} from "react";

import './ProductPage.style.scss'

import ProductPreview from "../../component/ProductPreview/ProductPreview.component";
import ProductDetails from "../../component/ProductDetails/ProductDetails.container";
import {withParams} from "../withParams";

class ProductPageComponent extends PureComponent {
    componentDidMount() {
        const {params, getProductPage} = this.props
        getProductPage(params.productId)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        const {params, getProductPage} = this.props
        const {productId: prevProductId} = prevProps.params

        if (params.productId !== prevProductId) {
            getProductPage(this.props.params.productId)
        }
    }

    render() {
        const {product = []} = this.props

        if (!product.id) {
            return <div>Loading...</div>;
        }

        return (
            <div className="ProductPage">
                <ProductPreview gallery={product.gallery} />

                <ProductDetails product={product} key={product.id}/>
            </div>
        );
    }
}

export default withParams(ProductPageComponent);