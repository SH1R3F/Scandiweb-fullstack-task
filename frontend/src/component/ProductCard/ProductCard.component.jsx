import {PureComponent} from "react";

import './ProductCard.style.scss'
import {Link} from "react-router-dom";

class ProductCardComponent extends PureComponent {
    sameVariant(cartProduct, clonedProduct) {
        // Check same product
        if (cartProduct.id !== clonedProduct.id) {
            return false;
        }

        // Check same attributes
        for (const i of Object.keys(cartProduct.attrs)) {
            for (const n of Object.keys(cartProduct.attrs[i].items)) {
                if (clonedProduct.attrs[i].items[n].selected === true && !cartProduct.attrs[i].items[n].selected) {
                    return false;
                }
            }
        }

        return true;
    }

    addToCart = (product) => {
        const {cartProducts, updateCart} = this.props

        // Clone to mutate
        let clonedProduct = JSON.parse(JSON.stringify(product));

        // Prepare product for Cart
        clonedProduct.attrs = clonedProduct.attrs.map(attr => {
            // Set default attributes
            attr.items[0].selected = true;
            return attr;
        });

        let newCartProducts;

        // Is it already in cart?
        if (cartProducts.find(cartProduct => cartProduct.id === clonedProduct.id)) {

            // Clone to mutate
            const clonedCartProducts = JSON.parse(JSON.stringify(cartProducts));

            newCartProducts = clonedCartProducts.map((cartProduct) => {
                // Check equality
                if (this.sameVariant(cartProduct, clonedProduct)) {
                    cartProduct.quantity = cartProduct.quantity + 1;
                }

                return cartProduct;
            })
        } else {
            clonedProduct.quantity = 1;
            newCartProducts = [...cartProducts, clonedProduct];
        }

        updateCart(newCartProducts)
    }

    render() {
        const {product} = this.props
        return (
            <div className="ProductCard">
                {product.inStock || <Link to={`/product/${product.id}`}><div className="ProductCard-OutOfStockOverlay">Out of stock</div></Link>}
                <Link to={`/product/${product.id}`}><img className="ProductCard-Photo" src={product.gallery[0]}
                                                        alt="Product"/></Link>
                <div className="ProductCard-AddToCart">
                    <button onClick={() => this.addToCart(product)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path
                                d="M23.4736 5.8484C23.0186 5.29247 22.3109 4.95457 21.5785 4.95457H6.19066L5.71097 3.16691C5.43262 2.12772 4.47323 1.40283 3.36082 1.40283H0.783719C0.354361 1.40283 0 1.74072 0 2.15227C0 2.56284 0.353351 2.9017 0.783719 2.9017H3.36082C3.73985 2.9017 4.06854 3.14333 4.1692 3.50577L7.25167 15.2494C7.53003 16.2886 8.48941 17.0135 9.60182 17.0135H19.6833C20.7947 17.0135 21.7808 16.2886 22.0335 15.2494L23.9286 7.80699C24.1053 7.1293 23.9543 6.40442 23.4736 5.84848L23.4736 5.8484ZM22.3879 7.46712L20.4928 14.9095C20.3921 15.272 20.0634 15.5136 19.6844 15.5136H9.60185C9.22282 15.5136 8.89413 15.272 8.79347 14.9095L6.59533 6.47717H21.5796C21.8323 6.47717 22.085 6.59798 22.237 6.79148C22.388 6.98403 22.463 7.22566 22.388 7.46729L22.3879 7.46712Z"
                                fill="white"/>
                            <path
                                d="M10.1332 17.9778C8.69316 17.9778 7.50586 19.1132 7.50586 20.4902C7.50586 21.8672 8.69326 23.0027 10.1332 23.0027C11.5733 23.0036 12.7606 21.8682 12.7606 20.491C12.7606 19.1137 11.5732 17.9775 10.1332 17.9775V17.9778ZM10.1332 21.4814C9.55188 21.4814 9.09685 21.0463 9.09685 20.4903C9.09685 19.9344 9.55188 19.4993 10.1332 19.4993C10.7146 19.4993 11.1696 19.9344 11.1696 20.4903C11.1687 21.0227 10.689 21.4814 10.1332 21.4814Z"
                                fill="white"/>
                            <path
                                d="M18.8251 17.978C17.3851 17.978 16.1978 19.1135 16.1978 20.4905C16.1978 21.8675 17.3852 23.0029 18.8251 23.0029C20.2651 23.0029 21.4525 21.8675 21.4525 20.4905C21.4279 19.1143 20.2651 17.978 18.8251 17.978ZM18.8251 21.4816C18.2438 21.4816 17.7887 21.0465 17.7887 20.4906C17.7887 19.9346 18.2438 19.4995 18.8251 19.4995C19.4065 19.4995 19.8615 19.9346 19.8615 20.4906C19.8615 21.0229 19.3809 21.4816 18.8251 21.4816Z"
                                fill="white"/>
                        </svg>
                    </button>
                </div>
                <h3 className="ProductCard-Title"><Link to={`product/${product.id}`}>{product.name}</Link></h3>
                <span className="ProductCard-Price">{product.prices[0].currency.symbol}{product.prices[0].amount}</span>
            </div>
        );
    }

}

export default ProductCardComponent;