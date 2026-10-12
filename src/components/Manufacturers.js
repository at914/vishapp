import { useNavigate } from "react-router-dom";
import "../style/CardDetails.css";

function Manufacturers({ cars }) {
  const navigate = useNavigate();

  const handleCarClick = (carId) => {
    navigate(`/car/${carId}`);
  };

  return (
    <div className="container pt-5">
      <div className="row">
        {cars.map((car) => (
          <div className="col-md-4 mb-4" key={car.id}>
            <div
              className="car-card"
              onClick={() => handleCarClick(car.id)}
            >
              <div className="car-image-container">
                <img
                  src={car.image}
                  className="card-img-top"
                  alt={car.name}
                />

                <span className="budget-badge">
                  ₹{car.budget} Lakh
                </span>
              </div>

              <div className="card-body">
                <h4 className="car-name">{car.name}</h4>

                <p className="car-make">
                  🚘 {car.make}
                </p>

                <p className="fuel-badge">
                  ⛽ {car.fuelType}
                </p>

                <button className="view-details-btn">
                  View Details
                </button>
              </div>
            </div>
            {/* <div
              className="card h-100"
              style={{ cursor: "pointer" }}
              onClick={() => handleCarClick(car.id)}
            >
              <img
                src={car.image}
                className="card-img-top"
                alt={car.name}
              />
              <div className="card-body">
                <h5>{car.name}</h5>
                <p>Make: {car.make}</p>
                <p>Budget: ₹{car.budget} Lakh</p>
                <p>Fuel: {car.fuelType}</p>
              </div>
            </div> */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Manufacturers;