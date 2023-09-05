import {Field} from "../Util/Query";

export class CartQuery {
    getPlaceOrderMutation(cartProducts) {
        return new Field('placeOrder').addArgument('order', '[Order]!', [{id: 123}]);
    }
}

export default new CartQuery();
