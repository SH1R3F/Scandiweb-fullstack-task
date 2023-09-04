import {setCategories} from "./Category.action";
import {Field, prepareQuery} from "../../Util/Query";
import {executePost} from "../../Util/Request/Request";

export class CategoryDispatcher {

    async updateCategories (dispatch) {

        // Fetch Categories

        // Build the query (that will later be moved to query/category.query)

        // Building query will use the field method of the util/query, use it to build a field name and nested fieldsets

        const categoriesQuery = new Field('categories').addFieldList([
            'id',
            'name'
        ]);

        // Convert it to query object of query: string, variable if exists
        const preparedQuery = prepareQuery(categoriesQuery);

        // Send the query in the request using GET method, by executeGet

        const { categories } = await executePost(preparedQuery);

        dispatch(setCategories(categories))
    }

}

export default new CategoryDispatcher();
