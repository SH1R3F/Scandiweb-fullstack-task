import {Fragment, PureComponent} from "react";

import './CartItem.style.scss'

class CartItemComponent extends PureComponent {

    constructor(props) {
        super(props);

        this.state = {
            product: props.product
        }
    }

    quantityHandler = (value, absolute = false) => {
        const product = {...this.state.product}
        product.quantity = absolute ? value : parseInt(product.quantity) + value;

        const {index, deleteProduct, updateCartProductQty} = this.props;
        if (product.quantity <= 0) {
            deleteProduct(index);
        }

        this.setState({product})
        // Update global product quantity
        updateCartProductQty(index, product.quantity)
    };

    renderAttributes(product) {
        return product.attrs.map(attr => (
            <div key={attr.id} className="CartItem-Attribute">
                <span className="CartItem-AttributeName">{attr.name}</span>
                <div className="CartItem-Options">
                    {attr.items.map((item) => (
                        <Fragment key={item.id}>
                            <input type="radio" name={attr.name} defaultValue={item.value}
                                   id={`${product.id}-${attr.id}-${item.id}`}/>
                            <label style={{background: attr.type === 'swatch' ? item.value : null}}
                                   className={`CartItem-Option ${item.selected && 'CartItem-Option_isSelected'} ${attr.type === 'swatch' && 'CartItem-Option_isColor'}`}
                                   htmlFor={`${product.id}-${attr.id}-${item.id}`}>
                                {attr.type === 'text' && item.value}
                            </label>
                        </Fragment>
                    ))}
                </div>
            </div>
        ));
    }

    render() {
        const {product} = this.state;

        return (
            <div className="CartItem">
                <div className="CartItem-Details">
                    <h4 className="CartItem-Title">{product.name}</h4>
                    <span
                        className="CartItem-Price">{product.prices[0].currency.symbol}{product.prices[0].amount}</span>
                    {this.renderAttributes(product)}
                </div>
                <div className="CartItem-Qty">
                    <button onClick={() => this.quantityHandler(1)}>+</button>
                    <input type="number" value={product.quantity} onChange={(e) => this.quantityHandler(e.target.value, true)}/>
                    <button onClick={() => this.quantityHandler(-1)}>-</button>
                </div>
                <div className="CartItem-Photo">
                    <img src={product.gallery[0]} alt="Product"/>
                </div>
            </div>
        );
    }
}

export default CartItemComponent;