import {PureComponent} from "react";

import './AddToCart.style.scss'

class AddToCartComponent extends PureComponent {
    render() {
        return (
            <button className="MiniCart" onClick={this.props.toggler} >
                <img src="/empty-cart.png" alt="Cart"/>

                <span className="MiniCart-Counter">2</span>
            </button>
        );
    }
}

export default AddToCartComponent;