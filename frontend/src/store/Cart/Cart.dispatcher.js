// import {setCategories, setCategoryPage} from "./Category.action";
import {prepareMutation} from "../../Util/Query";
import {executePost} from "../../Util/Request/Request";
import CartQuery from "../../query/Cart.query";
import {updatedPlacedOrder} from "./Cart.action";

export class CartDispatcher {

    async placeOrder (dispatch, cartProducts) {
        try {
            const data = await executePost(
                prepareMutation(CartQuery.getPlaceOrderMutation(cartProducts))
            );

            // dispatch(updatedPlacedOrder());
        } catch (error) {
            console.error(error);
        }
    }

}

export default new CartDispatcher();
