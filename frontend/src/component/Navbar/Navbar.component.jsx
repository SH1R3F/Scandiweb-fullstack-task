import {PureComponent} from "react";

import './Navbar.style.scss'
import AddToCart from "../AddToCart/AddToCart.container";
import CartOverlay from "../CartOverlay/CartOverlay.container";
import {Link, NavLink} from "react-router-dom";

export class NavbarComponent extends PureComponent {

    componentDidMount() {
        const {setCategories} = this.props
        setCategories()
    }

    render() {
        const {minicartStatus, categories = []} = this.props

        if (categories.length === 0) {
            return <div>Loading...</div>;
        }

        return (
            <header className="Navbar">
                <div className="Navbar-Container">
                    <nav>
                        <ul>
                            {categories.map((category) => (
                                <li key={category.id} className="Navbar-Item">
                                    <NavLink
                                        to={`/${category.id}`}
                                        className={({ isActive, isPending }) =>
                                            isActive ? "Navbar-Item_isActive" : ""
                                        }
                                    >{category.name}</NavLink>
                                </li>
                            ))}
                        </ul>
                    </nav>
                    <Link to="/" className="Navbar-Logo"><img src="/a-logo.png" alt="Scandiweb"/></Link>
                    <AddToCart />
                    {minicartStatus && <CartOverlay/>}
                </div>
            </header>
        )
    }
}

export default NavbarComponent