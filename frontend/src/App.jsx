import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashbord from "./pages/dashbord/Dashbord";
import NavHorizontal from "./componants/nav/horizontal/NavHorizontal";
import Home from "./pages/home/Home";
import Error from "./pages/Error/Error";
import Profil from "./pages/profil/Profil";
import Reglage from "./pages/reglage/Reglage";
import Communaute from "./pages/communaute/Communaute";

/**
 * Main component of the application that manages the routing of the different pages
 *
 * @returns {JSX.Element} The router component
 */
const App = () => {
  return (
    <BrowserRouter>
      <NavHorizontal />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Profil />} />
        <Route path="/user/:id" element={<Dashbord />} />
        <Route path="/reglage" element={<Reglage />} />
        <Route path="/communaute" element={<Communaute />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
