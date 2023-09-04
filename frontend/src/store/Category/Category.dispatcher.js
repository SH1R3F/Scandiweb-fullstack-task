import {setCategories, setProducts} from "./Category.action";
import {prepareQuery} from "../../Util/Query";
import {executePost} from "../../Util/Request/Request";
import CategoryQuery from "../../query/Category.query";
import ProductQuery from "../../query/Product.query";

export class CategoryDispatcher {

    async updateCategories (dispatch) {
        try {
            const data = await executePost(
                prepareQuery(CategoryQuery.getQuery())
            );

            dispatch(setCategories(data.categories));
        } catch (error) {
            console.error(error);
        }
    }
    async updateProducts (dispatch) {
        try {
            const data = await executePost(
                prepareQuery(ProductQuery.getQuery())
            );

            console.log(data)

            dispatch(setProducts(data.products));
        } catch (error) {
            console.error(error);
        }
    }

}

export default new CategoryDispatcher();
