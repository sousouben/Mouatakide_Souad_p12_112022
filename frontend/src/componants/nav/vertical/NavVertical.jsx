import React from "react";
import Button from "./Button";
import "./NavVertical.css";
import yoga from "../../../assets/images/yoga.png";
import natation from "../../../assets/images/natation.png";
import velo from "../../../assets/images/velo.png";
import altere from "../../../assets/images/alteres.png";
import copy from "../../../assets/images/copiryght.png";

function NavVertical() {
  const handleGetMeditationData = () => {
    console.log("yoga");
  };
  function handleGetNatationData() {
    console.log("natation");
  }
  function handleGetCyclismeData() {
    console.log("velo");
  }
  function handleGetMusculationData() {
    console.log("altere");
  }
  return (
    <div className="vertical">
      <section className="navIcone">
        <Button srcImg={yoga} launch={handleGetMeditationData} />
        <Button srcImg={natation} launch={handleGetNatationData} />
        <Button srcImg={velo} launch={handleGetCyclismeData} />
        <Button srcImg={altere} launch={handleGetMusculationData} />
      </section>
      <img className="copy" src={copy} alt="copiryght SportSee" />
    </div>
  );
}

export default NavVertical;
