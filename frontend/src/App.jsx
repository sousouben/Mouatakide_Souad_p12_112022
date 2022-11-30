import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NavHorizontal from "./componants/nav/horizontal/NavHorizontal";
import NavVertical from "./componants/nav/vertical/NavVertical";

const App = () => {
  return (
    <BrowserRouter>
      <NavHorizontal />
      <NavVertical />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
