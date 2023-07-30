import React from "react";
import "../styles/components/header.scss";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <img className="logo" src="" alt="" />
      <nav>
        <div className="navigation">
          <ul>
            <NavLink
              to="/"
              className={(nav) => (nav.isActive ? "nav-active" : "")}
            >
              <li>Accueil</li>
            </NavLink>

            <NavLink
              to="/about"
              className={(nav) => (nav.isActive ? "nav-active" : "")}
            >
              <li>À propos</li>
            </NavLink>

            <NavLink
              to="/competences"
              className={(nav) => (nav.isActive ? "nav-active" : "")}
            >
              <li>Compétences</li>
            </NavLink>

            <NavLink
              to="/portfolio"
              className={(nav) => (nav.isActive ? "nav-active" : "")}
            >
              <li>Portfolio</li>
            </NavLink>

            <NavLink
              to="/contact"
              className={(nav) => (nav.isActive ? "nav-active" : "")}
            >
              <li>Contact</li>
            </NavLink>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
