import React, { useState } from "react";
import "../style/Products.css";
import data from "../data/data.json";
import seatCover from "../assets/accessories/seat-cover.jpg";
import musicSystem from "../assets/accessories/music-system.jpg";
import lights from "../assets/accessories/lights.jpeg";
import tyres from "../assets/accessories/tyres.jpeg";
import interior from "../assets/accessories/interior.jpg";


function Products() {
    const [activeId, setActiveId] = useState("1");

    /* const header = data.header; */
    const sidebar = data.sidebar;
    const carData = data.carData;

    const imageMap = {
        "1": seatCover,
        "2": musicSystem,
        "3": lights,
        "4": tyres,
        "5": interior
    };

    const selectedItem = carData.find(
        (item) => item.id === activeId
    );

    const handleSidebarClick = (id) => {
        setActiveId(id);
    };

    return (
        <div className="click-to-view">
            <div className="cp-click-to-view">

                {/* Header */}
                <div className="cp-click-to-view__body service-header container">
                    <h1 className="cp-click-to-view__title mt-4">
                        Car Accessories Marketplace
                    </h1>

                    <p className="cp-click-to-view__description">
                        You can explore a wide range of car accessories, from seat covers to music systems, lights, tyres, and interior enhancements. Select an accessory from the left menu to view its details and specifications.
                    </p>
                </div> 

                <div className="wrapper">

                    {/* Sidebar */}
                    <div className="sidebar">
                        <div className="sidebar-header">
                            <span>Car Accessories</span>
                            <span>{sidebar.length}</span>
                        </div>

                        <div className="sidebar-list">
                            {sidebar.map((item) => (
                                <div
                                    key={item.id}
                                    className={`sidebar-item ${activeId === item.id ? "active" : ""
                                        }`}
                                    onClick={() => handleSidebarClick(item.id)}
                                >
                                    {item.title}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Side Content */}
                    {/* <div className="content">
                        {selectedItem ? (
                            <>
                                <h1>{selectedItem.title}</h1>

                                <p>{selectedItem.desc}</p>

                                <h3>
                                    Price: {selectedItem.price}
                                </h3>

                                <p>
                                    Material: {selectedItem.Material}
                                </p>

                                <p>
                                    Colors: {selectedItem.Colors}
                                </p>

                                <p>
                                    Made: {selectedItem.Made}
                                </p>

                                <div className="actions">
                                    <button className="btn btn-primary">
                                        Add To Cart
                                    </button>
                                </div>
                            </>
                        ) : (
                            <p>Select a cake from the left menu.</p>
                        )}
                    </div>
 */}

                    <div className="content">
                        {selectedItem ? (
                            <div className="product-layout">

                                {/* Product Image */}
                                <div className="product-image-container">
                                    {imageMap[selectedItem.id] && (
                                        <img
                                            src={imageMap[selectedItem.id]}
                                            alt={selectedItem.title}
                                            className="product-image"
                                        />
                                    )}
                                </div>

                                {/* Product Details */}
                                <div className="product-details">

                                    <h1>{selectedItem.title}</h1>

                                    <p className="product-description">
                                        {selectedItem.desc}
                                    </p>

                                    <div className="product-price">
                                        {selectedItem.price}
                                    </div>

                                    <div className="specification-card">

                                        <div className="spec-row">
                                            <span>Material</span>
                                            <strong>{selectedItem.Material}</strong>
                                        </div>

                                        <div className="spec-row">
                                            <span>Colors</span>
                                            <strong>{selectedItem.Colors}</strong>
                                        </div>

                                        <div className="spec-row">
                                            <span>Brand</span>
                                            <strong>{selectedItem.Made}</strong>
                                        </div>

                                    </div>

                                    <div className="actions">
                                        <button className="btn btn-primary">
                                            Add To Cart
                                        </button>

                                        <button className="btn btn-outline">
                                            Buy Now
                                        </button>
                                    </div>

                                </div>

                            </div>
                        ) : (
                            <p>Select an accessory from the menu.</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Products;