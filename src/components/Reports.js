import React from "react";
import "../style/Reports.css";

const reportData = [
  {
    id: 1,
    brand: "Maruti Suzuki",
    sold: 1250,
    revenue: "₹9.5 Cr",
    growth: "+18%"
  },
  {
    id: 2,
    brand: "Hyundai",
    sold: 980,
    revenue: "₹8.1 Cr",
    growth: "+12%"
  },
  {
    id: 3,
    brand: "Tata Motors",
    sold: 850,
    revenue: "₹7.3 Cr",
    growth: "+24%"
  },
  {
    id: 4,
    brand: "Mahindra",
    sold: 720,
    revenue: "₹6.8 Cr",
    growth: "+16%"
  }
];

function Reports() {
  return (
    <div className="reports-container">

      <div className="reports-header">
        <h1>Car Sales & Growth Reports</h1>
        <p>
          Track vehicle sales, revenue growth, and manufacturer performance.
        </p>
      </div>

      <div className="stats-container">

        <div className="stats-card">
          <h4>Total Cars Sold</h4>
          <h2>3,800</h2>
        </div>

        <div className="stats-card">
          <h4>Total Revenue</h4>
          <h2>₹31.7 Cr</h2>
        </div>

        <div className="stats-card">
          <h4>Growth Rate</h4>
          <h2>17%</h2>
        </div>

        <div className="stats-card">
          <h4>Top Brand</h4>
          <h2>Maruti Suzuki</h2>
        </div>

      </div>

      <div className="table-section">

        <h2>Brand Wise Performance</h2>

        <table className="report-table">

          <thead>
            <tr>
              <th>Brand</th>
              <th>Cars Sold</th>
              <th>Revenue</th>
              <th>Growth</th>
            </tr>
          </thead>

          <tbody>
            {reportData.map((item) => (
              <tr key={item.id}>
                <td>{item.brand}</td>
                <td>{item.sold}</td>
                <td>{item.revenue}</td>
                <td className="growth-cell">
                  {item.growth}
                </td>
              </tr>
            ))}
          </tbody>

        </table>

      </div>

      <div className="achievement-banner">
        <h2>🏆 Monthly Achievement</h2>
        <p>
          Maruti Suzuki recorded the highest vehicle sales this month
          with 1,250 units sold and 18% growth.
        </p>
      </div>

    </div>
  );
}

export default Reports;