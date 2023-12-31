import {PureComponent} from "react";

import './CartOverlay.style.scss'
import CartItem from "../CartItem/CartItem.container";
import {cartProductsCount} from "../../Util/helpers";

class CartOverlayComponent extends PureComponent {

    componentDidMount() {
        document.querySelector('#overlay').style.display = 'block'
    }

    componentWillUnmount() {
        document.querySelector('#overlay').style.display = 'none'
    }

    submitOrder() {
        const {placeOrder, cartProducts} = this.props;

        placeOrder(cartProducts)
    }

    render() {
        const {cartProducts} = this.props
        const counter = cartProductsCount(cartProducts);

        return (
            <div className="CartOverlay">
                <div className="CartOverlay-Counter">
                    <strong>My Bag</strong>. {counter} {counter === 1 ? 'item' : 'items'}
                </div>

                <div className="CartOverlay-Items">
                    {cartProducts.map((product, i) => <CartItem key={`${product.id}-${i}`} product={product} index={i}/>)}
                </div>

                {!cartProducts.length && (<div className="CartOverlay-EmptyMsg">No products added to cart yet</div>)}

                <div className="CartOverlay-Total">
                    <strong>Total</strong>
                    <strong>${cartProducts.reduce((total, product) => total + (parseFloat(product.prices[0].amount) * product.quantity), 0).toFixed(2)}</strong>
                </div>

                <button className="CartOverlay-Submit" disabled={!cartProducts.length} onClick={() => this.submitOrder()}>Place Order</button>
            </div>
        );
    }
}

export default CartOverlayComponent;