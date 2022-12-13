import React from "react";
import logo from "../../../assets/logo/logo.png";
import "./NavHorizontal.css";
import { NavLink } from "react-router-dom";

function NavHorizontal() {
  return (
    <div className="horizon">
      <header>
        <img src={logo} alt="logo SportSee" />
        <nav>
          <ul>
            <NavLink to="/home" className="navLink">
              <li>Accueil</li>
            </NavLink>
            <NavLink to="/" className="navLink">
              <li>Profil</li>
            </NavLink>
            <NavLink to="/reglage" className="navLink">
              <li>Réglage</li>
            </NavLink>
            <NavLink to="/communaute" className="navLink">
              <li>Communauté</li>
            </NavLink>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default NavHorizontal;
