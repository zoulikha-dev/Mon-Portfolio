import React, { useState } from "react";
import Modal from "react-modal";
import "../styles/components/modalcomponent.scss";
import { FaGithub, FaGlobe, FaTimes } from "react-icons/fa";

const Modalcomponent = ({
  titleModal,
  imageModal,
  imageModal2,
  description,
  title2,
  title3,
  lienSite,
  lienGitHub,
  competences,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const OpenModal = () => {
    setIsOpen(true);
  };

  const CloseModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <button onClick={OpenModal} className="btn-open">
        Voir plus ...
      </button>
      <Modal
        isOpen={isOpen}
        onRequestClose={CloseModal}
        className="modal-custom projet-details"
        contentLabel="Exemple de Modal"
      >
        <h3>{titleModal}</h3>
        <p>{description}</p>
        <img src={imageModal} alt="maquette" className="img-modal" />
        <img src={imageModal2} alt="maquette" className="img-modal" />
        <h4>{title2}</h4>
        <ul>
          {competences.map((competence, index) => (
            <li key={index}>{competence}</li>
          ))}
        </ul>
        <h4>{title3}</h4>
        {lienSite && (
          <a href={lienSite} target="_blank" rel="noopener noreferrer">
            <FaGlobe className="icon-globe" />
          </a>
        )}
        {lienGitHub && (
          <a href={lienGitHub} target="_blank" rel="noopener noreferrer">
            <FaGithub className="icon-github" />
          </a>
        )}
        <button onClick={CloseModal} className="btn-close">
          <FaTimes />
        </button>
      </Modal>
    </div>
  );
};

export default Modalcomponent;
