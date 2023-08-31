import React, {PureComponent} from "react";

import './HomePage.style.scss'
import {Outlet} from "react-router-dom";
import Navbar from "../../component/Navbar/Navbar.container";

export class HomePageComponent extends PureComponent {
    render() {
        const {setMiniCartState} = this.props
        return (
            <>
                <Navbar/>
                <div className="Overlay" id="overlay" onClick={() => setMiniCartState(false)}></div>
                <Outlet/>
            </>
        )
    }
}

export default HomePageComponent;