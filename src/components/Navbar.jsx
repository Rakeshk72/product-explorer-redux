import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Navbar() {
  const favorites = useSelector(
    (state) => state.favorites.items
  );

  return (
    <header className="site-header">
      <nav className="navbar">
        <NavLink className="brand" to="/">
          Product Explorer
        </NavLink>

        <div className="nav-links">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "active-link" : ""
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/favorites"
            className={({ isActive }) =>
              isActive ? "active-link" : ""
            }
          >
            Favorites ({favorites.length})
          </NavLink>
        </div>
      </nav>
    </header>
  );
}