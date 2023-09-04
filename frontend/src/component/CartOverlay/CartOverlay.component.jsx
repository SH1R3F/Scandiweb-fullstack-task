import {PureComponent} from "react";

import './CartOverlay.style.scss'
import CartItem from "../CartItem/CartItem.component";

class CartOverlayComponent extends PureComponent {

    componentDidMount() {
        document.querySelector('#overlay').style.display = 'block'
    }

    componentWillUnmount() {
        document.querySelector('#overlay').style.display = 'none'
    }

    render() {
        const {cartProducts} = this.props

        return (
            <div className="CartOverlay">
                <div className="CartOverlay-Counter">
                    <strong>My Bag</strong>. {cartProducts.length} items
                </div>

                <div className="CartOverlay-Items">
                    {cartProducts.map((product, i) => <CartItem key={`${product.id}-${i}`} product={product}/>)}
                </div>

                <div className="CartOverlay-Total">
                    <strong>Total</strong>
                    <strong>$200.00</strong>
                </div>

                <button className="CartOverlay-Submit">Place Order</button>
            </div>
        );
    }
}

export default CartOverlayComponent;