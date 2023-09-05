import {prepareQuery} from "../../Util/Query";
import {executePost} from "../../Util/Request/Request";
import {setProductPage} from "./Product.action";
import ProductQuery from "../../query/Product.query";

export class ProductDispatcher {

    async getProductPage (dispatch, productId) {
        try {
            const data = await executePost(
                prepareQuery(ProductQuery.getQuery(productId))
            );

            dispatch(setProductPage(data.product));
        } catch (error) {
            console.error(error);
        }
    }

}

export default new ProductDispatcher();
