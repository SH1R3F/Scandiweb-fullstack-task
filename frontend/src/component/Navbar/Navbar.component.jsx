import {PureComponent} from "react";

import './Navbar.style.scss'
import AddToCart from "../AddToCart/AddToCart.component";
import CartOverlay from "../CartOverlay/CartOverlay.component";
import {Link} from "react-router-dom";

export class NavbarComponent extends PureComponent {

    state = {
        isCartOpen: false
    }

    toggleCart() {
        this.setState({
            ...this.state,
            isCartOpen: !this.state.isCartOpen
        })
    }

    render() {
        const {isCartOpen} = this.state
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
                    <AddToCart toggler={this.toggleCart.bind(this)}/>
                    {isCartOpen && <CartOverlay/>}
                </div>
            </header>
        )
    }
}

export default NavbarComponent