import React from "react";
import "../styles/components/header.scss";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <header>
      <img className="logo" src="" alt="" />
      <nav>
        <div className="navigation">
          <ul>
            <li>
              <Link to="accueil" smooth={true} duration={500}>
                Accueil
              </Link>
            </li>
            <li>
              <Link to="presentation" smooth={true} duration={500}>
                Présentation
              </Link>
            </li>
            <li>
              <Link to="competences" smooth={true} duration={500}>
                Compétences
              </Link>
            </li>
            <li>
              <Link to="portfolio" smooth={true} duration={500}>
                Portfolio
              </Link>
            </li>
            <li>
              <Link to="contact" smooth={true} duration={500}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
