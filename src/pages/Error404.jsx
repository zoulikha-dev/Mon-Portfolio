import React from "react";
import { Link } from "react-router-dom";
import "../styles/components/error404.scss";

const Erreur404 = () => {
  return (
    <div>
      <h1 className="error-title">404</h1>
      <p className="error">Oups! la page que vous demandez n'existe pas.</p>
      <div className="lien-accueil">
        <Link to="/" className="lien">
          Retourner sur la page d'accueil
        </Link>
      </div>
    </div>
  );
};

export default Erreur404;
