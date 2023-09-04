import {setCategories} from "./Category.action";
import {prepareQuery} from "../../Util/Query";
import {executePost} from "../../Util/Request/Request";
import CategoryQuery from "../../query/Category.query";

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

}

export default new CategoryDispatcher();
