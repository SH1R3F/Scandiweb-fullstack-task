import {PureComponent} from "react";

import './CategoryPage.style.scss'
import ProductCard from "../../component/ProductCard/ProductCard.component";

class CategoryPageComponent extends PureComponent {
    render() {
        return (
            <div className="CategoryPage">
                <h1 className="CategoryPage-Title">Women</h1>
                <div className="CategoryPage-Products">
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </div>
            </div>
        );
    }
}

export default CategoryPageComponent;