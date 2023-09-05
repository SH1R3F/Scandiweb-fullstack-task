import {PureComponent} from "react";

import './CartOverlay.style.scss'
import CartItem from "../CartItem/CartItem.container";
import {cartProductsCount, cartProductsTotal} from "../../Util/helpers";

class CartOverlayComponent extends PureComponent {

    componentDidMount() {
        document.querySelector('#overlay').style.display = 'block'
    }

    componentWillUnmount() {
        document.querySelector('#overlay').style.display = 'none'
    }

    render() {
        const {cartProducts, cartProductsTotal} = this.props

        return (
            <div className="CartOverlay">
                <div className="CartOverlay-Counter">
                    <strong>My Bag</strong>. {cartProductsCount(cartProducts)} items
                </div>

                <div className="CartOverlay-Items">
                    {cartProducts.map((product, i) => <CartItem key={`${product.id}-${i}`} product={product} index={i}/>)}
                </div>

                <div className="CartOverlay-Total">
                    <strong>Total</strong>
                    <strong>${cartProducts.reduce((total, product) => total + (parseFloat(product.prices[0].amount) * product.quantity), 0).toFixed(2)}</strong>
                </div>

                <button className="CartOverlay-Submit">Place Order</button>
            </div>
        );
    }
}

export default CartOverlayComponent;