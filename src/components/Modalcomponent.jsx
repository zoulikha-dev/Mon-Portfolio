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
  title4,
  pdfLink,
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
        {/* Condition pour afficher le titre4 et le pdf si il est défini */}
        {title4 && <h4>{title4}</h4>}
        {pdfLink && (
          <a href={pdfLink} target="_blank" rel="noopener noreferrer">
            Télécharger le rapport d'intervention (PDF)
          </a>
        )}
        {/* fin de la condition du pdf et titre4 */}
        <button onClick={CloseModal} className="btn-close">
          <FaTimes />
        </button>
        <div className="img-modal-container">
          <img src={imageModal} alt="maquette" className="img-modal" />
          <img src={imageModal2} alt="maquette" className="img-modal" />
        </div>
      </Modal>
    </div>
  );
};

export default Modalcomponent;
