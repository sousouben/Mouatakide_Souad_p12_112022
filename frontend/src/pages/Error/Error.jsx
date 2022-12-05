import React from "react";
import { Link } from "react-router-dom";
import "./Error.css";

const Error = () => {
  return (
    <>
      <div className="error">
        <h1>404</h1>
        <span>Oups! La page que vous demandez n'existe pas.</span>{" "}
        <Link to="/">Retour à la page d'Accueil</Link>{" "}
      </div>
    </>
  );
};

export default Error;
