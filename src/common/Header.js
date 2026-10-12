import React from "react";
import carlogo from "../assets/carlogo.png";
import NavMenu from "./NavMenu";
import "../style/common/Header.css";
import FilterPopup from "../components/FilterPopup";

const Header = () => {
    
    return (
        <header className="chat-header">
            <div className="header-left">
                {carlogo && <img src={carlogo} alt="Car Logo" className="car-logo" />}
                <h2 className="app-heading">
                    Future Cars Marketplace
                </h2>
            </div>
            <NavMenu />
            <FilterPopup/>
        </header>
    );
};

export default Header;