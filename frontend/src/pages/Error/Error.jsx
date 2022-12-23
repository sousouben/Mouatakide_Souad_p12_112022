import React from "react";
import { Link } from "react-router-dom";
import "./Error.css";

/**
 * A functional component for displaying an error message.
 * @returns {JSX} The JSX for displaying the error message and a link to the home page.
 */
const Error = () => {
  return (
    <div className="error">
      <h1>404</h1>
      <span>Oups! La page que vous demandez n'existe pas.</span>
      <Link to="/home" className="error-link">
        Retour à la page d'Accueil
      </Link>
    </div>
  );
};

export default Error;
