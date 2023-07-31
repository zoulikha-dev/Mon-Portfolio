import React from "react";
import "../styles/components/about.scss";
import photo from "../assets/img/IMG_2464.webp";

const About = () => {
  return (
    <div className="about-container">
      <img src={photo} alt="Ma photo" className="photo" />
      <h1>Présentation</h1>
      <br />
      <p>
        Passionnée par le développement web, j'ai décidé de me former chez
        OpenClassRooms pour concrétiser mon désir de devenir développeuse web.
        <br /> Au cours de ma formation, j'ai acquis des connaissances
        approfondies en HTML, CSS, JavaScript, et React pour concevoir des sites
        web attrayants et réactifs. De plus, j'ai découvert le développement
        back-end en utilisant NodeJS, Express, et MongoDB, ce qui me permet de
        progresser dans la création d'applications web complètes.
        <br />
        <br></br>
        Je suis enthousiaste à l'idée de mettre en pratique ces compétences et
        de contribuer à des projets web passionnants. Mon objectif est de
        continuer à évoluer professionnellement dans le domaine du développement
        web.
      </p>
      {/* creer le composant icon */}
    </div>
  );
};

export default About;
