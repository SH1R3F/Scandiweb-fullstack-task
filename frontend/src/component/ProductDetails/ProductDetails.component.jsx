import React, {PureComponent} from 'react';

import './ProductDetails.style.scss'

class ProductDetailsComponent extends PureComponent {
    render() {
        return (
            <div className="ProductDetails">
                <h1>Running Shorts</h1>

                <div className="ProductDetails-Attribute">
                    <span className="ProductDetails-AttributeName">Size:</span>
                    <div className="ProductDetails-Options">
                        <input type="radio" name="size" value="xs" id="xs"/>
                        <div className="ProductDetails-Option">
                            <label htmlFor="xs">XS</label>
                        </div>

                        <input type="radio" name="size" value="s" id="s"/>
                        <div className="ProductDetails-Option">
                            <label htmlFor="s">S</label>
                        </div>

                        <input type="radio" name="size" value="m" id="m"/>
                        <div className="ProductDetails-Option ProductDetails-Option_isSelected">
                            <label htmlFor="m">M</label>
                        </div>

                        <input type="radio" name="size" value="l" id="l"/>
                        <div className="ProductDetails-Option">
                            <label htmlFor="l">L</label>
                        </div>
                    </div>
                </div>

                <div className="ProductDetails-Attribute">
                    <span className="ProductDetails-AttributeName">Color</span>
                    <div className="ProductDetails-Options">
                        <input type="radio" name="color" value="gray" id="gray"/>
                        <label style={{background: '#D3D2D5'}} htmlFor="gray" className="ProductDetails-Option ProductDetails-Option_isSelected ProductDetails-Option_isColor">
                        </label>

                        <input type="radio" name="color" value="black" id="black"/>
                        <label style={{background: '#2B2B2B'}} htmlFor="black" className="ProductDetails-Option ProductDetails-Option_isColor">
                        </label>

                        <input type="radio" name="color" value="green" id="green"/>
                        <label style={{background: '#0F6450'}} htmlFor="green" className="ProductDetails-Option ProductDetails-Option_isColor">
                        </label>
                    </div>
                </div>

                <div className="ProductDetails-Price">
                    <div className="ProductDetails-AttributeName">Price</div>
                    <strong>$50.00</strong>
                </div>

                <button className="ProductDetails-AddToCart">Add To Cart</button>

                <p className="ProductDetails-Description">Find stunning women's cocktail dresses and party dresses. Stand out in lace and metallic cocktail dresses and party dresses from all your favorite brands.</p>


            </div>
        );
    }
}

export default ProductDetailsComponent;