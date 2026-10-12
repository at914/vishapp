import React from "react";
import "../style/Services.css";
import engineService from "../assets/services/engine-service.jpg";
import filterService from "../assets/services/filter-service.jpg";
import brakeService from "../assets/services/brake-service.jpg";
import tyreService from "../assets/services/tyre-service.jpg";
import batteryService from "../assets/services/battery-service.jpg";

const services = [
  {
    id: 1,
    title: "Engine & Fluid Check",
    price: "₹1,499",
    image: engineService,
    description:
      "Complete inspection of engine oil, coolant, brake fluid, transmission fluid and power steering fluid.",
    features: [
      "Engine Oil Check",
      "Coolant Inspection",
      "Brake Fluid Check",
      "Transmission Fluid Check"
    ]
  },
  {
    id: 2,
    title: "Filter Replacement",
    price: "₹999",
    image: filterService,
    description:
      "Replacement of air filter, cabin filter and oil filter to improve mileage and engine health.",
    features: [
      "Air Filter",
      "Cabin Filter",
      "Oil Filter",
      "Improved Fuel Efficiency"
    ]
  },
  {
    id: 3,
    title: "Brake & Suspension",
    price: "₹2,499",
    image: brakeService,
    description:
      "Inspection of brake pads, discs, suspension, shocks and springs for maximum safety.",
    features: [
      "Brake Pad Check",
      "Brake Disc Check",
      "Suspension Inspection",
      "Shock Absorber Testing"
    ]
  },
  {
    id: 4,
    title: "Tyre & Wheel Care",
    price: "₹1,299",
    image: tyreService,
    description:
      "Wheel alignment, wheel balancing, tyre pressure and tread depth assessment.",
    features: [
      "Wheel Alignment",
      "Wheel Balancing",
      "Tyre Pressure",
      "Tread Depth Inspection"
    ]
  },
  {
    id: 5,
    title: "Battery & Electrical Check",
    price: "₹899",
    image: batteryService,
    description:
      "Complete battery health, alternator, headlights and electrical diagnostics.",
    features: [
      "Battery Health",
      "Alternator Test",
      "Headlight Check",
      "Dashboard Diagnostics"
    ]
  }
];

function Services() {
  return (
    <div className="services-page">

      <div className="service-header">
        <h1>Car Service Packages</h1>
        <p>
          Professional maintenance services to keep your
          vehicle performing at its best.
        </p>
      </div>

      <div className="service-grid">

        {services.map((service) => (
         <div className="service-card" key={service.id}>

    <img src={service.image} alt={service.title} className="service-image" />

    <div className="service-body">

              <h3>{service.title}</h3>

              <div className="service-price">
                Starting at {service.price}
              </div>

              <p>{service.description}</p>

              <ul>
                {service.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>

              <button className="book-btn">
                Book Service
              </button>

            </div>

          </div>
        ))}

      </div>
    </div>
  );
}

export default Services;