import React from "react";
import { Link } from "react-router-dom";
import karl from "../../assets/images/karl.png";
import cecilia from "../../assets/images/cecilia.png";

const Profil = () => {
  return (
    <main className="reglage_img">
      <Link to="user/12" style={{ marginRight: "20px" }}>
        <img src={karl} alt="" />
      </Link>
      <Link to="user/18">
        <img src={cecilia} alt="" />
      </Link>
    </main>
  );
};

export default Profil;
