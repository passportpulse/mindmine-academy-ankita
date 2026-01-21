import { NavLink } from "react-router-dom";
import { navLinks } from "../navbar/NavbarData";
import logo from "../../assets/logo.png";
import "./../../styles/navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-custom sticky-top">
      <div className="container-fluid">
        {/* Logo + Brand */}
        <NavLink to="/" className="brand d-flex align-items-center gap-2">
          <img src={logo} alt="Mindime Academy" className="brand-logo" />

          <div className="brand-text">
            <span className="brand-mindmine">MINDMINE</span>
            <span className="brand-academy">ACADEMY</span>
          </div>
        </NavLink>

        {/* Hamburger for small screens */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Links */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center">
            {navLinks.map(({ label, path }) => {
              if (label.toLowerCase() === "apply now") {
                return (
                  <li className="nav-item" key={path}>
                    <NavLink
                      to={path}
                      className={({ isActive }) =>
                        `nav-link apply-btn ${isActive ? "active-link" : ""}`
                      }
                    >
                      {label}
                    </NavLink>
                  </li>
                );
              }
              return (
                <li className="nav-item" key={path}>
                  <NavLink
                    to={path}
                    className={({ isActive }) =>
                      `nav-link ${isActive ? "active-link" : ""}`
                    }
                  >
                    {label}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
}
