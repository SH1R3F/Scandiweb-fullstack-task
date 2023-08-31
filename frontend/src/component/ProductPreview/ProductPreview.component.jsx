import React, {PureComponent} from 'react';

import './ProductPreview.style.scss'

class ProductPreviewComponent extends PureComponent {
    render() {
        return (
            <div className="ProductPreview">
                <img className="ProductPreview-Image" src="/product.png" alt="Product"/>
                <img className="ProductPreview-Image" src="/product.png" alt="Product"/>
                <img className="ProductPreview-Image" src="/product.png" alt="Product"/>
                <img className="ProductPreview-Image" src="/product.png" alt="Product"/>
                <img className="ProductPreview-Image" src="/product.png" alt="Product"/>
                <img className="ProductPreview-Image ProductPreview-Image_isActive" src="/product.png" alt="Product"/>
            </div>
        );
    }
}

export default ProductPreviewComponent;