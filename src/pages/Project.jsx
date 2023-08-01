import React from "react";
import booki from "../assets/img/booki1.png";
import kasa from "../assets/img/kasa.png";
import "../styles/components/project.scss";
import { useState, useEffect } from "react";
import { FaGithub, FaGlobe } from "react-icons/fa";

const Project = () => {
  // Déclaration du state projets pour stocker les donées du fichier JSON
  const [projets, setProjets] = useState();

  // UseEffect sert pour le fetch
  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((jsonData) => {
        setProjets(jsonData);
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération des données:", error);
      });
  }, []);

  const firstProject = projets && projets.length > 0 ? projets[0] : null;

  return (
    <div className="project-container">
      <div className="title">
        <h1>Mes projets</h1>
      </div>
      <div className="img-container">
        <img src={booki} alt="Booki" className="img-booki" />
        <div className="projet-details">
          {firstProject && (
            <div>
              <h2>{firstProject.titre}</h2>
              <p>{firstProject.description}</p>
              {/* liste des compétences */}
              <div className="competences-container">
                <h3>Langages utilisés</h3>
                <ul className="competence-ul">
                  {/* Utilisation de la méthode map pour parcourir le tableau des compétences */}
                  {firstProject.competences.map((competence, index) => (
                    // Utilisation de la clé unique "index" pour chaque élément de la liste
                    <li className="competence-li" key={competence + index}>
                      {competence}
                    </li>
                  ))}
                </ul>
              </div>
              {/* icone lien site */}
              <h4 className="title-lien">Lien du site et du GitHub</h4>
              <div className="lien-icons">
                <a
                  href={firstProject.lienSite}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGlobe className="icon-globe" />
                </a>
                {/* icone lien github */}
                <a
                  href={firstProject.lienGitHub}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="icon-github" />
                </a>
              </div>
              {/* fin icones */}
            </div>
          )}
        </div>

        <img src={kasa} alt="kasa" className="img-kasa" />
      </div>
    </div>
  );
};

export default Project;
