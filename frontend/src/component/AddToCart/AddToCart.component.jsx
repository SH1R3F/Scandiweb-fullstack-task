import {PureComponent} from "react";

import './AddToCart.style.scss'

class AddToCartComponent extends PureComponent {
    render() {
        const {minicartStatus, setMiniCartState} = this.props
        return (
            <button className="MiniCart" onClick={() => setMiniCartState(!minicartStatus)}>
                <img src="/empty-cart.png" alt="Cart"/>

                <span className="MiniCart-Counter">2</span>
            </button>
        );
    }
}

export default AddToCartComponent;