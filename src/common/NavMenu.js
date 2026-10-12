
import { NavLink } from "react-router-dom";
import "../style/common/NavMenu.css";
import carData from "../data/carData";
import FilterPopup from "../components/FilterPopup";

function NavMenu() {
  

  return (
    <nav className="navbar-custom">
      <div className="nav-overflow">
        <ul className="nav nav-pills">

          <li className="nav-item">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Dashboard
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              to="/products"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Products
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              to="/services"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Services
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              to="/reports"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Reports
            </NavLink>
          </li>

        </ul>
      </div>
    </nav>
  );
}

export default NavMenu;