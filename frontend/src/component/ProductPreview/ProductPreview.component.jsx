import React, {PureComponent} from 'react';

import './ProductPreview.style.scss'

class ProductPreviewComponent extends PureComponent {

    state = {
        activeIndex: 0
    }

    setImageActive(index) {
        this.setState({activeIndex: index})
    }

    render() {
        const {gallery} = this.props;
        const {activeIndex} = this.state

        return (
            <div className={`ProductPreview ${gallery.length === 1 && 'ProductPreview_isSingleImage'}`}>
                {gallery.map((image, i) => {
                    return <img key={i} className={`ProductPreview-Image ${i === activeIndex && 'ProductPreview-Image_isActive'}`} src={image} alt="Product" onClick={() => this.setImageActive(i)}/>;
                })}
            </div>
        );
    }
}

export default ProductPreviewComponent;