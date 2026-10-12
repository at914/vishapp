import { useParams } from "react-router-dom";
import carData from "../data/carData";

function CarDetails() {
    const { id } = useParams();

    const car = carData.find((c) => c.id === parseInt(id));

    if (!car) {
        return <h2>Car Not Found</h2>;
    }

    return (
        <div className="container mt-5">
            <div className="card shadow-lg border-0 p-4">
                <div className="row align-items-center">

                    {/* Left Column - Image */}
                    <div className="col-md-6 text-center"><img
                        src={car.image}
                        alt={car.name}
                        className="img-fluid l-md-6" /></div>
                    <div className="col-md-6 text-center">

                        <h2 className="mb-4">{car.name}</h2>

                        <table className="table table-bordered">
                            <tbody>
                                <tr>
                                    <th>Manufacturer</th>
                                    <td>{car.make}</td>
                                </tr>

                                <tr>
                                    <th>Budget</th>
                                    <td>₹ {car.budget} Lakh</td>
                                </tr>

                                <tr>
                                    <th>Fuel Type</th>
                                    <td>{car.fuelType}</td>
                                </tr>

                                <tr>
                                    <th>Transmission</th>
                                    <td>{car.transmission}</td>
                                </tr>

                                <tr>
                                    <th>Mileage</th>
                                    <td>{car.mileage}</td>
                                </tr>
                            </tbody>
                        </table>

                        <button className="btn btn-primary me-2">
                            Book Test Drive
                        </button>

                        <button className="btn btn-success">
                            Get Best Price
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default CarDetails;