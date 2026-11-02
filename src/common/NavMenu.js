
import { NavLink } from "react-router-dom";
import "../style/common/NavMenu.css";
import { useSelector } from "react-redux";

function NavMenu() {
  const cartItems = useSelector(
    (state) => state.cart.items
  );

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
          <li className="nav-item">
            <NavLink
              to="/cart"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Cart ({cartItems.length})
            </NavLink>
          </li>

        </ul>
      </div>
    </nav>
  );
}

export default NavMenu;