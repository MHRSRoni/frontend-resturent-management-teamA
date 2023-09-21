import React from "react";
import { NavLink } from "react-router-dom";

const AppNavbar = () => {
  return (
    <nav className="navbar sticky-top bg-light navbar-expand-lg shadow">
      <div className="container-fluid mx-3">
        <NavLink className="logo mx-5" to="/">
          Kachchi <span className="logo-color">Palace</span>
        </NavLink>

        <div className="collapse navbar-collapse justify-content-end mx-5">
          <ul className="navbar-nav gap-3">
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">
                Contact
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/menu">
                Menu
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/sign-up">
                Sign Up
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default AppNavbar;
