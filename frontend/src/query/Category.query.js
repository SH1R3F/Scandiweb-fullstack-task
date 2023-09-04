import {Field} from "../Util/Query";

export class CategoryQuery {
    getQuery() {
        return new Field('categories').addFieldList([
            'id',
            'name'
        ]);
    }

    getCategoryPageQuery(categoryId) {
        return new Field('category').addArgument('id', 'ID!', categoryId).addFieldList([
            'name',
            new Field('products').addFieldList([
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
        ])
    }
}

export default new CategoryQuery();
