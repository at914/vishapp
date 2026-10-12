import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import carData from "../data/carData";

function FilteredCars() {
    const location = useLocation();

    const [filters, setFilters] = useState({});

    useEffect(() => {
        const savedFilters =
            JSON.parse(localStorage.getItem("carFilters")) || {};
        setFilters(savedFilters);
    }, [location]);

    const filteredCars = carData.filter((car) => {
        const budgetMatch =
            !filters.budget ||
            Number(car.budget) <= Number(filters.budget);

        const fuelMatch =
            !filters.fuelType ||
            car.fuelType === filters.fuelType;

        const makeMatch =
            !filters.make ||
            car.make === filters.make;

        return budgetMatch && fuelMatch && makeMatch;
    });

    return (
        <div className="container mt-5">
            <h2 className="mb-4 text-center">
                {filters.make
                    ? `${filters.make} Cars`
                    : "Filtered Cars"}
            </h2>

            <div className="row">

                {filteredCars.length > 0 ? (
                    filteredCars.map((car) => (
                        <div
                            key={car.id}
                            className="col-md-4 mb-4"
                        >
                            <div className="card h-100 shadow">

                                <img src={car.image} alt={car.name} />

                                <div className="card-body">

                                    <h5>{car.name}</h5>

                                    <p>
                                        <strong>Make:</strong>{" "}
                                        {car.make}
                                    </p>

                                    <p>
                                        <strong>Fuel:</strong>{" "}
                                        {car.fuelType}
                                    </p>

                                    <p>
                                        <strong>Budget:</strong>
                                        ₹ {car.budget} Lakh
                                    </p>

                                    <Link
                                        to={`/car/${car.id}`}
                                        className="btn btn-primary"
                                    >
                                        View Details
                                    </Link>

                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="text-center">
                        <h4>No Cars Found</h4>
                    </div>
                )}

            </div>
        </div>
    );
}

export default FilteredCars;