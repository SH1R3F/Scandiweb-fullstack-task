import React, {Fragment, PureComponent} from 'react';

import './ProductDetails.style.scss'
import {addOrAppendToCart} from "../../Util/helpers";

class ProductDetailsComponent extends PureComponent {

    constructor(props) {
        super(props);

        this.state = {
            product: props.product
        }
    }

    chooseItem(attrIndex, itemIndex) {
        const variant = JSON.parse(JSON.stringify(this.state.product))

        variant.attrs[attrIndex].items.map((item, i) => {
            item.selected = itemIndex === i;
            return item;
        })

        this.setState({product: variant})
    }


    renderAttributes(product) {
        return product.attrs.map((attr, i) => {
            return (
                <div key={attr.id} className="ProductDetails-Attribute">
                    <span className="ProductDetails-AttributeName">{attr.name}</span>
                    <div className="ProductDetails-Options">
                        {attr.items.map((item, n) => {
                            return (
                                <Fragment key={item.id}>
                                    <input type="radio" name={attr.name} value={item.value}
                                           id={`${attr.id}-${item.value}`} onChange={() => this.chooseItem(i, n)}/>
                                    <label style={{background: attr.type === 'swatch' ? item.value : null}}
                                           htmlFor={`${attr.id}-${item.value}`}
                                           className={`ProductDetails-Option ${item.selected && 'ProductDetails-Option_isSelected'} ${attr.type === 'swatch' && 'ProductDetails-Option_isColor'}`}>
                                        {attr.type === 'text' && item.value}
                                    </label>
                                </Fragment>
                            )
                        })}
                    </div>
                </div>
            )
        });
    }

    isAllowed() {
        const {product: {attrs, inStock}} = this.state;

        return inStock && attrs.reduce((result, attr) => {
            return result && !!attr.items.find(item => item.selected);
        }, true)
    }

    addToCart() {
        const {product} = this.state;
        const {cartProducts, updateCart} = this.props

        const newCartProducts = addOrAppendToCart(cartProducts, product);
        updateCart(newCartProducts)
    }


    render() {
        const {product} = this.state

        return (
            <div className="ProductDetails">
                <h1>{product.name}</h1>

                {this.renderAttributes(product)}

                <div className="ProductDetails-Price">
                    <div className="ProductDetails-AttributeName">Price</div>
                    <strong>{product.prices[0].currency.symbol}{product.prices[0].amount.toFixed(2)}</strong>
                </div>

                <button className="ProductDetails-AddToCart" disabled={!this.isAllowed()} onClick={() => this.addToCart()}>
                    Add To Cart
                </button>

                <p className="ProductDetails-Description" dangerouslySetInnerHTML={{__html: product.description}}></p>
            </div>
        );
    }
}

export default ProductDetailsComponent;