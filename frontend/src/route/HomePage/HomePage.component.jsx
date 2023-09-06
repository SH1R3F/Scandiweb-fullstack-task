import React, {PureComponent} from "react";

import './HomePage.style.scss'
import {Outlet} from "react-router-dom";
import Navbar from "../../component/Navbar/Navbar.container";

export class HomePageComponent extends PureComponent {

    renderModal() {
        const {placedOrderMessage, clearOrderMessage} = this.props;

        if (placedOrderMessage) {
            return <div className="ModalWrapper">
                <div className="Modal">
                    <div className="Modal-Content">
                        <p>{placedOrderMessage}</p>
                        <button className="Modal-Close" onClick={() => clearOrderMessage()}>&times;</button>
                    </div>
                </div>
            </div>;
        }
    }

    render() {
        const {setMiniCartState} = this.props
        return (
            <>
                <Navbar/>
                <div className="Overlay" id="overlay" onClick={() => setMiniCartState(false)}></div>
                <Outlet/>
                {this.renderModal()}
            </>
        )
    }
}

export default HomePageComponent;