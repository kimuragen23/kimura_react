import React from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => (
    <nav className="navbar">
        <NavLink
            exact
            activeClassName="navbar__link--active"
            className="navbar__link"
            to="/">Home
        </NavLink>

        <NavLink       
            activeClassName="navbar__link--active"
            className="navbar__link" 
            to="/about">About
        </NavLink>
    </nav>
)

export default Navigation;