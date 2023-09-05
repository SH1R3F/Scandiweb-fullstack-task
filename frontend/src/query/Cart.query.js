import {Field} from "../Util/Query";

export class CartQuery {
    getPlaceOrderMutation(cartProducts) {
        let x = cartProducts.map(product => {
            return {
                id: product.id,
                name: product.name,
                quantity: product.quantity,
                prices: product.prices,
                attrs: product.attrs
            }
        });
        return new Field('placeOrder')
            .addArgument('order', '[Order]!', x)
            .addFieldList(['message']);
    }
}

export default new CartQuery();
