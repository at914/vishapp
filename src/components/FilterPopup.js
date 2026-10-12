import React, { useState } from "react";
import carData from "../data/carData";
import "../style/FilterPopup.css";
import { FaFilter } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function FilterPopup({ onApplyFilter }) {
    const navigate = useNavigate();
    const [budget, setBudget] = useState("");
    const [fuelType, setFuelType] = useState("");
    const [make, setMake] = useState("");
    const [showModal, setShowModal] = useState(false);

    const fuelTypes = [...new Set(carData.map(car => car.fuelType))];
    const makes = [...new Set(carData.map(car => car.make))];

    const handleApply = () => {
        const filterData = {
            budget,
            fuelType,
            make,
        };

        localStorage.setItem(
            "carFilters",
            JSON.stringify(filterData)
        );

        setShowModal(false);

        navigate("/filtered-cars");
    };


    return (
        <>
            <button
                className="btn btn-primary"
                onClick={() => setShowModal(true)}
            >
                <FaFilter style={{ marginRight: "8px" }} />
                Filter Cars
            </button>

            {showModal && (
                <div
                    className="modal d-block"
                    tabIndex="-1"
                    style={{
                        backgroundColor: "rgba(0,0,0,0.5)",
                        zIndex: 99999,
                        position: "fixed"
                    }}
                >

                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">

                            <div className="modal-header">
                                <h5 className="modal-title">
                                    🚗 Find Your Perfect Car
                                </h5>

                                <button
                                    className="btn-close"
                                    onClick={() => setShowModal(false)}
                                ></button>
                            </div>

                            <div className="modal-body">

                                <div className="mb-3">
                                    <label className="form-label">
                                        Budget
                                    </label>

                                    <select
                                        className="form-select"
                                        value={budget}
                                        onChange={(e) => setBudget(e.target.value)}
                                    >
                                        <option value="">Select Budget</option>
                                        <option value="2">2 Lakh</option>
                                        <option value="3">3 Lakh</option>
                                        <option value="4">4 Lakh</option>
                                        <option value="5">5 Lakh</option>
                                        <option value="6">6 Lakh</option>
                                        <option value="7">7 Lakh</option>
                                        <option value="8">8 Lakh</option>
                                        <option value="9">9 Lakh</option>
                                        <option value="10">10 Lakh</option>
                                        <option value="11">11 Lakh</option>
                                        <option value="12">12 Lakh</option>
                                        <option value="13">13 Lakh</option>
                                        <option value="14">14 Lakh</option>
                                        <option value="15">15 Lakh</option>
                                        <option value="16">16 Lakh</option>
                                        <option value="17">17 Lakh</option>
                                        <option value="18">18 Lakh</option>
                                        <option value="19">19 Lakh</option>
                                        <option value="20">20 Lakh</option>
                                        <option value="21">21 Lakh</option>
                                    </select>
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">
                                        Fuel Type
                                    </label>

                                    <select
                                        className="form-select"
                                        value={fuelType}
                                        onChange={(e) => setFuelType(e.target.value)}
                                    >
                                        <option value="">Select Fuel Type</option>

                                        {fuelTypes.map((fuel) => (
                                            <option key={fuel} value={fuel}>
                                                {fuel}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">
                                        Make
                                    </label>

                                    <select
                                        className="form-select"
                                        value={make}
                                        onChange={(e) => setMake(e.target.value)}
                                    >
                                        <option value="">Select Make</option>

                                        {makes.map((brand) => (
                                            <option key={brand} value={brand}>
                                                {brand}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                            </div>

                            <div className="modal-footer">
                                <button
                                    className="btn btn-secondary"
                                    onClick={() => setShowModal(false)}
                                >
                                    Close
                                </button>

                                <button
                                    className="btn btn-success"
                                    onClick={handleApply}
                                >
                                    Apply Filter
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default FilterPopup;