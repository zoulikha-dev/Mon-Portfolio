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
  FaChevronDown,
} from "react-icons/fa";
import { useState, useEffect } from "react";
import booki from "../assets/img/booki1.png";
import kasa from "../assets/img/kasa.png";
import bluel from "../assets/img/bluel.webp";
import nina from "../assets/img/nina.png";
import bookiModal from "../assets/img/Mobile.png";
import bookiModal2 from "../assets/img/Desktop.png";
import kasaModal from "../assets/img/D_Home1.webp";
import kasaModal2 from "../assets/img/D_Fiche-Logement.webp";
import bluelModal from "../assets/img/Homepage-bluel.png";
import bluelModal2 from "../assets/img/Loginbluel.png";
import ninaModal from "../assets/img/nina1.png";
import ninaModal2 from "../assets/img/nina2.png";
import Icons from "../components/Icons";
import Modalcomponent from "../components/Modalcomponent";
import { Link } from "react-scroll";
import Header from "../components/Header";

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
  const thirdProject = projets && projets.length > 2 ? projets[2] : null;
  const fourthProject = projets && projets.length > 3 ? projets[3] : null;

  return (
    <>
      <Header />
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
            <div className="arrow-container">
              <Link to="portfolio" smooth={true} duration={500}>
                <FaChevronDown className="fade" />
              </Link>
            </div>
          </div>
        </section>
        {/* --------------------------- Présentation ---------------------------------- */}
        <section id="presentation" className="about-container">
          <img src={photo} alt="Moi" className="photo" />
          <h2>Présentation</h2>
          <p>
            Passionnée par le développement web, j'ai décidé de me former chez
            OpenClassRooms pour concrétiser mon désir de devenir développeuse
            web.
            <br /> Au cours de ma formation, j'ai acquis des connaissances
            approfondies en HTML, CSS, JavaScript, et React pour concevoir des
            sites web attrayants et réactifs. De plus, j'ai découvert le
            développement back-end en utilisant NodeJS, Express, et MongoDB, ce
            qui me permet de progresser dans la création d'applications web
            complètes.
            <br />
            <br></br>
            Je suis enthousiaste à l'idée de mettre en pratique ces compétences
            et de contribuer à des projets web passionnants. Mon objectif est de
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
              Construction de sites web responsive et dynamique grâce à HTML,
              CSS, JavaScript et React. Optimisation des performances et
              maintenance de sites existants garantissant leur bon
              fonctionnement et une meilleure visibilité sur les moteurs de
              recherche.
            </p>
            <FaNodeJs className="icon-nodejs" />
            <p>
              Création d'API et de bases de données pour concevoir des sites
              complets et dynamiques, assurant ainsi leur bon fonctionnement
              côté serveur. Utilisation des technologies telles que NodeJS,
              Express, et MongoDB pour mettre en place des solutions robustes et
              performantes.
            </p>
            <FaGithub className="icon-github1" />
            <p>
              Utilisation de Git et Github pour versionner mon code, suivre les
              modifications apportés et collaborer en équipe de manière
              transparente.
            </p>
          </div>
        </section>

        {/* ---------------------------- Portfolio ------------------------- */}
        <section id="portfolio" className="project-container">
          <h2 className="title-container">Mes projets</h2>
          <div className="img-container">
            <div className="container-bis">
              <img src={booki} alt="Booki" className="img-booki" />
              <div className="modal">
                {firstProject && (
                  <Modalcomponent
                    titleModal={firstProject.titre}
                    imageModal={bookiModal}
                    imageModal2={bookiModal2}
                    description={firstProject.description}
                    title2={firstProject.sousTitre}
                    title3={firstProject.sousTitre2}
                    competences={firstProject.competences}
                    lienSite={firstProject.lienSite}
                    lienGitHub={firstProject.lienGitHub}
                  />
                )}
              </div>
            </div>
            <div className="container-bis">
              <img src={kasa} alt="kasa" className="img-kasa" />
              <div className="modal">
                {secondProject && (
                  <Modalcomponent
                    titleModal={secondProject.titre}
                    description={secondProject.description}
                    title2={secondProject.sousTitre}
                    title3={secondProject.sousTitre2}
                    competences={secondProject.competences}
                    lienGitHub={secondProject.lienGitHub}
                    imageModal={kasaModal}
                    imageModal2={kasaModal2}
                  />
                )}
              </div>
            </div>

            <div className="container-bis">
              <img src={bluel} alt="bluel" className="img-bluel" />
              <div className="modal">
                {thirdProject && (
                  <Modalcomponent
                    titleModal={thirdProject.titre}
                    description={thirdProject.description}
                    title2={thirdProject.sousTitre}
                    title3={thirdProject.sousTitre2}
                    competences={thirdProject.competences}
                    lienGitHub={thirdProject.lienGitHub}
                    imageModal={bluelModal}
                    imageModal2={bluelModal2}
                  />
                )}
              </div>
            </div>

            <div className="container-bis">
              <img src={nina} alt="nina" className="img-nina" />
              <div className="modal">
                {fourthProject && (
                  <Modalcomponent
                    titleModal={fourthProject.titre}
                    description={fourthProject.description}
                    title2={fourthProject.sousTitre}
                    title3={fourthProject.sousTitre2}
                    competences={fourthProject.competences}
                    lienSite={fourthProject.lienSite}
                    lienGitHub={fourthProject.lienGitHub}
                    title4={fourthProject.sousTitre3}
                    pdfLink={fourthProject.pdf}
                    imageModal={ninaModal}
                    imageModal2={ninaModal2}
                  />
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
