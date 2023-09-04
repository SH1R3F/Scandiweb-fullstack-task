import {PureComponent} from "react";

import './CategoryPage.style.scss'
import ProductCard from "../../component/ProductCard/ProductCard.component";

class CategoryPageComponent extends PureComponent {

    state = {
        products: [
            {
                id: 1,
                image: '/product.png',
                name: 'Running Short',
                price: 50.00
            },
            {
                id: 2,
                image: '/product.png',
                name: 'Jogging leggings',
                price: 12.00
            },
            {
                id: 3,
                image: '/product.png',
                name: 'Boxing boxers',
                price: 12.25
            },
            {
                id: 4,
                image: '/product.png',
                name: 'Sunglasses',
                price: 99.99
            },
            {
                id: 5,
                image: '/product.png',
                name: 'Eye glasses',
                price: 40.00
            },
        ]
    }

    componentDidMount() {
        this.props.setProducts()
    }


    render() {
        const {products} = this.state
        return (
            <div className="CategoryPage">
                <h1 className="CategoryPage-Title">Women</h1>
                <div className="CategoryPage-Products">
                    {products.map((product) => <ProductCard product={product} key={product.id} />)}
                </div>
            </div>
        );
    }
}

export default CategoryPageComponent;