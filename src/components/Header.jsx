import React, { useState } from "react";
import { useRef } from "react";
import "../styles/components/header.scss";
import { Link } from "react-scroll";
import { FaBars } from "react-icons/fa";

const Header = () => {
  // Création d'une référence à l'élément "nav" du DOM pour accéder à ses propriétés
  const navRef = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // false = menu fermé

  // Fonction pour afficher ou masquer le menu (toggle)
  const showNavbar = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeNavbar = () => {
    setIsMenuOpen(false);
  };

  return (
    <header>
      <img className="logo" src="" alt="" />
      <nav ref={navRef} className={isMenuOpen ? "responsive_nav" : ""}>
        <div className="navigation">
          <ul>
            <li>
              <Link
                to="accueil"
                smooth={true}
                duration={500}
                onClick={closeNavbar}
              >
                Accueil
              </Link>
            </li>
            <li>
              <Link
                to="presentation"
                smooth={true}
                duration={500}
                onClick={closeNavbar}
              >
                Présentation
              </Link>
            </li>
            <li>
              <Link
                to="competences"
                smooth={true}
                duration={500}
                onClick={closeNavbar}
              >
                Compétences
              </Link>
            </li>
            <li>
              <Link
                to="portfolio"
                smooth={true}
                duration={500}
                onClick={closeNavbar}
              >
                Projets
              </Link>
            </li>
            <li>
              <Link
                to="footer"
                smooth={true}
                duration={500}
                onClick={closeNavbar}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
};

export default Header;
