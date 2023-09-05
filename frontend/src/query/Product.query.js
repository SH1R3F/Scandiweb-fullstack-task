import {Field} from "../Util/Query";

export class ProductQuery {
    getQuery(productId) {
        return new Field('product').addArgument('id', 'ID!', productId).addFieldList([
            'id',
            'name',
            'inStock',
            'gallery',
            'description',
            new Field('category').addFieldList(['name']),
            new Field('attrs').addFieldList([
                'id',
                'name',
                'type',
                new Field('items').addFieldList(['id', 'value', 'display_value'])
            ]),
            new Field('prices').addFieldList([
                'amount',
                new Field('currency').addFieldList(['label', 'symbol'])
            ]),
            'brand'
        ])
    }
}

export default new ProductQuery();
