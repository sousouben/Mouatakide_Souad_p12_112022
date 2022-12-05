import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main>
      <Link to="user/12" style={{ marginRight: "20px" }}>
        Karl
      </Link>
      <Link to="user/18">Cecilia</Link>
    </main>
  );
};

export default Home;
