import React from "react";
import "../styles/components/footer.scss";
import Icons from "./Icons";

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <Icons colorClass="icons-color" />
        <p>Réalisé par Zoulikha EL HADRI</p>
      </div>
    </footer>
  );
};

export default Footer;
