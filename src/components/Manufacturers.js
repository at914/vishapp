import { useNavigate } from "react-router-dom";
import "../style/CardDetails.css";

function Manufacturers({ cars }) {
  const navigate = useNavigate();

  const handleCarClick = (carId) => {
    navigate(`/car/${carId}`);
  };

  return (
    <div className="container py-5">
      <div className="row">
        <div className="text-center mb-5">
          <h1 className="fw-bold display-5">
            Explore Our Premium Cars
          </h1>
          <p className="text-muted">
            Discover the perfect vehicle for your lifestyle and budget
          </p>
        </div>
        {cars.map((car) => (
          <div className="col-lg-4 col-md-6 mb-4" key={car.id}>
            <div
              className="car-card"
              onClick={() => handleCarClick(car.id)}
            >
              <div className="car-image-container">
                <img src={car.image} alt={car.name} className="car-image" />

                <span className="budget-badge">
                  ₹ {car.budget} Lakh
                </span>
              </div>

              <div className="card-content">
                <h4 className="car-name">{car.name}</h4>

                <div className="car-details">
                  <span className="car-make">
                    🚘 {car.make}
                  </span>

                  <span className="fuel-badge">
                    ⛽ {car.fuelType}
                  </span>
                </div>

                <button className="view-details-btn">
                  View Details →
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Manufacturers;