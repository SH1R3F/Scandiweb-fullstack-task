import {Field} from "../Util/Query";

export class ProductQuery {
    getQuery() {
        return new Field('products').addFieldList([
            'id',
            'name',
            'inStock',
            'gallery',
            'description',
            // category {
            //     name
            // }
            // attrs {
            //     id
            //     name
            //     type
            //     items {
            //         id
            //         value
            //         display_value
            //     }
            // }
            // prices {
            //     amount
            //     currency {
            //         label
            //         symbol
            //     }
            // }
            'brand'
        ]);
    }
}

export default new ProductQuery();
