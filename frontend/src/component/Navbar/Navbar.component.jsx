import {PureComponent} from "react";

import './Navbar.style.scss'
import AddToCart from "../AddToCart/AddToCart.container";
import CartOverlay from "../CartOverlay/CartOverlay.component";
import {Link} from "react-router-dom";

export class NavbarComponent extends PureComponent {

    render() {
        const {minicartStatus} = this.props

        return (
            <header className="Navbar">
                <div className="Navbar-Container">
                    <nav>
                        <ul>
                            <li className="Navbar-Item Navbar-Item_isActive"><Link to={'/'}>Women</Link></li>
                            <li className="Navbar-Item"><Link to={'/'}>Men</Link></li>
                            <li className="Navbar-Item"><Link to={'/'}>Kids</Link></li>
                        </ul>
                    </nav>
                    <img className="Navbar-Logo" src="/a-logo.png" alt="Scandiweb"/>
                    <AddToCart />
                    {minicartStatus && <CartOverlay/>}
                </div>
            </header>
        )
    }
}

export default NavbarComponent