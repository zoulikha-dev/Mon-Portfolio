import React from "react";
import "../styles/components/footer.scss";
import Icons from "./Icons";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="footer-container">
        <h2>N'hésitez pas à me contacter</h2>
        <Icons colorClass="icons-color" />
        <p>Réalisé par Zoulikha EL HADRI</p>
      </div>
    </footer>
  );
};

export default Footer;
