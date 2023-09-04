import {Fragment, PureComponent} from "react";

import './CartItem.style.scss'

class CartItemComponent extends PureComponent {
    render() {
        const {product} = this.props;
        console.log(product)
        return (
            <div className="CartItem">
                <div className="CartItem-Details">
                    <h4 className="CartItem-Title">{product.name}</h4>
                    <span
                        className="CartItem-Price">{product.prices[0].currency.symbol}{product.prices[0].amount}</span>

                    {product.attrs.map(attr => (
                        <div key={attr.id} className="CartItem-Attribute">
                            <span className="CartItem-AttributeName">{attr.name}</span>
                            <div className="CartItem-Options">
                                {attr.items.map((item) => (
                                    <Fragment key={item.id}>
                                        <input type="radio" name={attr.name} defaultValue={item.value}
                                               id={`${product.id}-${attr.id}-${item.id}`}/>
                                        <label style={{background: attr.type === 'swatch' ? item.value : null}}  className={`CartItem-Option ${item.selected && 'CartItem-Option_isSelected'} ${attr.type === 'swatch' && 'CartItem-Option_isColor'}`}  htmlFor={`${product.id}-${attr.id}-${item.id}`}>
                                            {attr.type === 'text' && item.value}
                                        </label>
                                    </Fragment>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
                <div className="CartItem-Qty">
                    <button onClick={() => {}}>+</button>
                    <input type="number" defaultValue={product.quantity}/>
                    <button onClick={() => {}}>-</button>
                </div>
                <div className="CartItem-Photo">
                    <img src={product.gallery[0]} alt="Product"/>
                </div>
            </div>
        );
    }
}

export default CartItemComponent;