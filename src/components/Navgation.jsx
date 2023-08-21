import React from "react";
import { NavLink } from "react-router-dom";
import circleImage from "./images/IMG_20230315_133730 (1).jpg"

function Navigation() {
  return (
    <div className="navigation">
      <nav className="navbar navbar-expand ">
        <div className="container">
        <NavLink className="navbar-brand" to="/">
            <img src={circleImage} alt="Circle Logo" className="circle-logo" /> MILANI KUKUMA
          </NavLink>
          <div>
            <ul className="navbar-nav ">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Home
                  <span className="sr-only">(current)</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/projects">
                  Projects
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  Contact
                </NavLink>
              </li>
             
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;