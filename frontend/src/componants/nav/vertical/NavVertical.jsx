import React from "react";
import "./NavVertical.css";
import yoga from "../../../assets/images/yoga.png";
import natation from "../../../assets/images/natation.png";
import velo from "../../../assets/images/velo.png";
import altere from "../../../assets/images/alteres.png";
import copy from "../../../assets/images/copiryght.png";

function NavVertical() {
  return (
    <div className="vertical">
      <section className="navIcone">
        <img src={yoga} alt="icone yoga" />
        <img src={natation} alt="icone natation" />
        <img src={velo} alt="icone vélo" />
        <img src={altere} alt="icone altère" />
      </section>
      <img className="copy" src={copy} alt="copiryght SportSee" />
    </div>
  );
}

export default NavVertical;
