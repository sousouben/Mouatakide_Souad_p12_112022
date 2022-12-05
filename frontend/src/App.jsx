import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Profil from "./pages/profil/Profil";
import NavHorizontal from "./componants/nav/horizontal/NavHorizontal";
import Home from "./pages/home/Home";
import Error from "./pages/Error/Error";

const App = () => {
  return (
    <BrowserRouter>
      <NavHorizontal />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/:id" element={<Profil />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
