import {PureComponent} from "react";

import './ProductPage.style.scss'

import ProductPreview from "../../component/ProductPreview/ProductPreview.component";
import ProductDetails from "../../component/ProductDetails/ProductDetails.component";

class ProductPageComponent extends PureComponent {
    render() {
        return (
            <div className="ProductPage">
                <ProductPreview />

                <ProductDetails/>
            </div>
        );
    }
}

export default ProductPageComponent;