import React from "react";
import logo from "../../../assets/logo/logo.png";
import "./NavHorizontal.css";

function NavHorizontal() {
  return (
    <div className="horizon">
      <header>
        <img src={logo} alt="logo SportSee" />
        <nav>
          <p> Accueil </p>
          <p> Profil </p>
          <p> Réglage </p>
          <p> Communauté </p>
        </nav>
      </header>
    </div>
  );
}

export default NavHorizontal;
