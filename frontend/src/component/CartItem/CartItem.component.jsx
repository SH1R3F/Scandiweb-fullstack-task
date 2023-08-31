import {PureComponent} from "react";

import './CartItem.style.scss'

class CartItemComponent extends PureComponent {
    render() {
        return (
            <div className="CartItem">
                <div className="CartItem-Details">
                    <h4 className="CartItem-Title">Running Short</h4>
                    <span className="CartItem-Price">$50.00</span>

                    <div className="CartItem-Attribute">
                        <span className="CartItem-AttributeName">Size</span>
                        <div className="CartItem-Options">
                            <input type="radio" name="size" value="xs" id="xs"/>
                            <div className="CartItem-Option">
                                <label htmlFor="xs">XS</label>
                            </div>

                            <input type="radio" name="size" value="s" id="s"/>
                            <div className="CartItem-Option">
                                <label htmlFor="s">S</label>
                            </div>

                            <input type="radio" name="size" value="m" id="m"/>
                            <div className="CartItem-Option CartItem-Option_isSelected">
                                <label htmlFor="m">M</label>
                            </div>

                            <input type="radio" name="size" value="l" id="l"/>
                            <div className="CartItem-Option">
                                <label htmlFor="l">L</label>
                            </div>
                        </div>
                    </div>
                    <div className="CartItem-Attribute">
                        <span className="CartItem-AttributeName">Color</span>
                        <div className="CartItem-Options">
                            <input type="radio" name="color" value="gray" id="gray"/>
                            <label style={{background: '#D3D2D5'}} htmlFor="gray" className="CartItem-Option CartItem-Option_isSelected CartItem-Option_isColor">
                            </label>

                            <input type="radio" name="color" value="black" id="black"/>
                            <label style={{background: '#2B2B2B'}} htmlFor="black" className="CartItem-Option CartItem-Option_isColor">
                            </label>

                            <input type="radio" name="color" value="green" id="green"/>
                            <label style={{background: '#0F6450'}} htmlFor="green" className="CartItem-Option CartItem-Option_isColor">
                            </label>
                        </div>
                    </div>
                </div>
                <div className="CartItem-Qty">
                    <button>+</button>
                    <input type="number" value={1}/>
                    <button>-</button>
                </div>
                <div className="CartItem-Photo">
                    <img src="/product.png" alt="Product"/>
                </div>
            </div>
        );
    }
}

export default CartItemComponent;