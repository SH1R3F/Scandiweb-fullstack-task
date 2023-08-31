import React, {PureComponent} from "react";

import './HomePage.style.scss'
import {Outlet} from "react-router-dom";
import Navbar from "../../component/Navbar/Navbar.component";

export class HomePageComponent extends PureComponent {
    render() {
        return (
            <>
                <Navbar/>
                <div className="Overlay" id="overlay"></div>
                <Outlet/>
            </>
        )
    }
}

export default HomePageComponent;