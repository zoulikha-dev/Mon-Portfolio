import React from "react";
import { FaGithub, FaEnvelope, FaLinkedin } from "react-icons/fa";
import "../styles/components/footer.scss";

const Footer = () => {
  const MailIconClick = () => {
    window.location.href = "mailto:zaz13@me.com";
  };

  return (
    <footer>
      <div className="footer-container">
        <div className="icons">
          <a
            href={"https://github.com/zoulikha-dev"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="icon-git" />
          </a>
          <FaEnvelope className="icon-mail" onClick={MailIconClick} />
          <a
            href={"https://www.linkedin.com/in/zoulikha-el-hadri-571080285/"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="icon-link" />
          </a>
        </div>
        <p>Réalisé par Zoulikha EL HADRI</p>
      </div>
    </footer>
  );
};

export default Footer;
