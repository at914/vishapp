import React, { useState } from "react";
import carlogo from "../assets/carlogo.png";
import NavMenu from "./NavMenu";
import "../style/common/Header.css";
import FilterPopup from "../components/FilterPopup";
import carData from "../data/carData";

const Header = () => {
    const [filteredCars, setFilteredCars] = useState(carData);
    return (
        <header className="chat-header">
            <div className="header-left">
                {carlogo && <img src={carlogo} alt="Car Logo" className="car-logo" />}
                <h2 className="app-heading">
                    Future Cars Marketplace
                </h2>
            </div>
            <NavMenu />
            <FilterPopup
              onApplyFilter={(filters) => {
                const filtered = carData.filter((car) => {
                  return (
                    (!filters.make || car.make === filters.make) &&
                    (!filters.fuelType ||
                      car.fuelType === filters.fuelType)
                  );
                });

                setFilteredCars(filtered);
              }}
            />
        </header>
    );
};

export default Header;