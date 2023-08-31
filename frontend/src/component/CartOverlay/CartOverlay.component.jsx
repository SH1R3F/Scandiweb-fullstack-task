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
        return (
            <div className="CartOverlay">
                <div className="CartOverlay-Counter">
                    <strong>My Bag</strong>. 3 items
                </div>

                <div className="CartOverlay-Items">
                    <CartItem/>
                    <CartItem/>
                    <CartItem/>
                    <CartItem/>
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