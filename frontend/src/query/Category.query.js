import {Field} from "../Util/Query";

export class CategoryQuery {
    getQuery() {
        return new Field('categories').addFieldList([
            'id',
            'name'
        ]);
    }
}

export default new CategoryQuery();
