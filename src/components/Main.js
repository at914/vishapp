import React from "react";
import { Routes, Route } from "react-router-dom";

import carData from "../data/carData";
import CarouselCarList from "../pages/CarouselCarList";
import Manufacturers from "./Manufacturers";
import CarDetails from "./CarDetails";
import Products from "./Products";
import Services from "./Services";
import Reports from "./Reports";
import FilteredCars from "./FilteredCars";

function Main() {
    const filteredCars = carData;

    return (
        <Routes>

            {/* Home Page */}
            <Route
                path="/"
                element={
                    <>
                        <CarouselCarList />
                        <Manufacturers cars={filteredCars} />
                    </>
                }
            />
            <Route path="/products" element={<Products />} />
            <Route
                path="/services"
                element={<Services />}
            />
            <Route path="/reports" element={<Reports />} />
            <Route
                path="/filtered-cars"
                element={<FilteredCars />}
            />

            {/* Car Details Page */}
            <Route
                path="/car/:id"
                element={<CarDetails />}
            />

        </Routes>
    );
}

export default Main;