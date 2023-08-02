import React from "react";
import "../styles/components/home.scss";
import Typewriter from "typewriter-effect";
import photo from "../assets/img/IMG_2464.webp";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaSass,
  FaGlobe,
} from "react-icons/fa";
import { useState, useEffect } from "react";
import booki from "../assets/img/booki1.png";
import kasa from "../assets/img/kasa.png";
import Icons from "../components/Icons";

const Home = () => {
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
  const secondProject = projets && projets.length > 1 ? projets[1] : null;

  return (
    <main>
      {/* ------------------------- Accueil ------------------------------- */}
      <section id="accueil" className="background-container">
        <div className="msg-container">
          <div className="typewriter-container">
            <h1 className="title-main">
              <Typewriter
                options={{
                  strings: "Je suis Zoulikha EL HADRI",
                  autoStart: true,
                }}
              ></Typewriter>
            </h1>
            <h2 className="subtitle">
              <Typewriter
                options={{
                  strings: "Développeuse Web",
                  autoStart: true,
                  loop: true,
                }}
              ></Typewriter>
            </h2>
          </div>
          {/* <div className="btn">
          <button>a voir plus tard !!!!!!</button>
        </div> */}
        </div>
      </section>
      {/* --------------------------- Présentation ---------------------------------- */}
      <section id="presentation" className="about-container">
        <img src={photo} alt="Ma photo" className="photo" />
        <h2>Présentation</h2>
        <p>
          Passionnée par le développement web, j'ai décidé de me former chez
          OpenClassRooms pour concrétiser mon désir de devenir développeuse web.
          <br /> Au cours de ma formation, j'ai acquis des connaissances
          approfondies en HTML, CSS, JavaScript, et React pour concevoir des
          sites web attrayants et réactifs. De plus, j'ai découvert le
          développement back-end en utilisant NodeJS, Express, et MongoDB, ce
          qui me permet de progresser dans la création d'applications web
          complètes.
          <br />
          <br></br>
          Je suis enthousiaste à l'idée de mettre en pratique ces compétences et
          de contribuer à des projets web passionnants. Mon objectif est de
          continuer à évoluer professionnellement dans le domaine du
          développement web.
        </p>
        <section className="presentation-icons">
          <Icons colorClass="icons-presentation" />
        </section>
      </section>

      {/* ---------------------------- Compétences ------------------------------- */}
      <section id="competences" className="skills-container">
        <h2 className="skills-title">Mes compétences</h2>
        <div className="icon-skills">
          <div className="first-icon">
            <FaHtml5 className="icon-html" />
            <FaCss3Alt className="icon-css" />
            <FaSass className="icon-sass" />
            <FaJs className="icon-js" />
            <FaReact className="icon-react" />
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti
            consequuntur voluptates doloremque accusamus! Natus repellendus quod
            suscipit iste amet, laudantium, aperiam voluptatem tempore delectus
            fuga quasi placeat a commodi. Doloremque!
          </p>
          <FaNodeJs className="icon-nodejs" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est vitae
            nostrum numquam mollitia, soluta ex non perferendis eveniet magni
            debitis vero voluptates, autem dolorem iste totam sapiente impedit
            ipsam ipsum aliquam optio doloribus omnis quasi! Tempore sit
            voluptates sint odit ut, temporibus possimus porro voluptate ipsum,
            unde, accusantium nam iste?
          </p>
          <FaGithub className="icon-github1" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae
            quisquam obcaecati odit repudiandae quam illum nihil voluptatem,
            natus earum a.
          </p>
        </div>
      </section>

      {/* ---------------------------- Portfolio ------------------------- */}
      <section id="portfolio" className="project-container">
        <h2 className="title">Mes projets</h2>
        <div className="img-container">
          <img src={booki} alt="Booki" className="img-booki" />
          <div className="projet-details">
            {firstProject && (
              <div>
                <h3>{firstProject.titre}</h3>
                <p>{firstProject.description}</p>
                {/* liste des compétences */}
                <div className="competences-container">
                  <h4>Langages utilisés</h4>
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
          {/* ----------------------- PROJET NUMÉRO 2 -------------------------------------- */}

          <img src={kasa} alt="kasa" className="img-kasa" />

          <div className="projet-details">
            {secondProject && (
              <div>
                <h3>{secondProject.titre}</h3>
                <p>{secondProject.description}</p>
                {/* liste des compétences */}
                <div className="competences-container">
                  <h4>Langages utilisés</h4>
                  <ul className="competence-ul">
                    {/* Utilisation de la méthode map pour parcourir le tableau des compétences */}
                    {secondProject.competences.map((competence, index) => (
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
                    href={secondProject.lienSite}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGlobe className="icon-globe" />
                  </a>
                  {/* icone lien github */}
                  <a
                    href={secondProject.lienGitHub}
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
        </div>
      </section>
      <section id="contact">
        <div>
          <h2>contact a faire</h2>
        </div>
      </section>
    </main>
  );
};

export default Home;
