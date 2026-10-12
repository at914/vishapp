import React from "react";
import { useNavigate } from "react-router-dom";
import kia from "../assets/carsManufacture/kia.png";
import Maruti from "../assets/carsManufacture/Maruti.jpg";
import skoda from "../assets/carsManufacture/skoda.png";
import tata from "../assets/carsManufacture/tata.jpeg";
import toyota from "../assets/carsManufacture/toyota.png";
import "../style/CarouselCarList.css";

function CarouselCarList() {
    const navigate = useNavigate();
    const carList = [
        {
            id: 1,
            name: "Kia",
            image: kia,
        },
        {
            id: 2,
            name: "Maruti Suzuki",
            image: Maruti,
        },
        {
            id: 3,
            name: "Skoda",
            image: skoda,
        },
        {
            id: 4,
            name: "Tata",
            image: tata,
        },
        {
            id: 5,
            name: "Toyota",
            image: toyota,
        },
    ];

    const handleExploreModels = (brand) => {

        localStorage.setItem(
            "carFilters",
            JSON.stringify({
                make: brand
            })
        );

        navigate("/filtered-cars");
    };


    return (
        <div
            id="carouselExample"
            className="carousel slide mb-5"
            data-bs-ride="carousel"
            data-bs-interval="3000"
        >
            <div className="carousel-inner">
                {carList.map((car, index) => (
                    <div
                        key={car.id}
                        className={`carousel-item ${index === 0 ? "active" : ""}`}
                    >
                        <div className="carousel-overlay"></div>

                         <img
                            src={car.image} alt=".." />

                        <div className="carousel-caption">
                            <h1>{car.name}</h1>
                            <p>Drive the Future with {car.name}</p>

                            <button className="btn btn-primary carousel-btn" onClick={() =>
                                    handleExploreModels(car.name)
                                }>
                                Explore Models
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExample"
                data-bs-slide="prev"
            >
                <span className="carousel-control-prev-icon"></span>
            </button>

            <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExample"
                data-bs-slide="next"
            >
                <span className="carousel-control-next-icon"></span>
            </button>

            <div className="carousel-indicators">
                {carList.map((car, index) => (
                    <button
                        key={car.id}
                        type="button"
                        data-bs-target="#carouselExample"
                        data-bs-slide-to={index}
                        className={index === 0 ? "active" : ""}
                        aria-current={index === 0 ? "true" : undefined}
                        aria-label={`Slide ${index + 1}`}
                    ></button>
                ))}
            </div>
        </div>
    );
}

export default CarouselCarList;