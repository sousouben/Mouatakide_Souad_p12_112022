import React from "react";
import { Link } from "react-router-dom";
import karl from "../../assets/images/karl.png";
import cecilia from "../../assets/images/cecilia.png";
/**
 * Displays user profile images.
 *
 * @returns {JSX.Element} A JSX element representing the user profile images.
 */
const Profil = () => {
  return (
    <main className="reglage_img">
      <Link to="/user/12" style={{ marginRight: "20px" }}>
        <img src={karl} alt="Profil de Karl" />
      </Link>
      <Link to="/user/18">
        <img src={cecilia} alt="Profil de Cécilia" />
      </Link>
    </main>
  );
};

export default Profil;
