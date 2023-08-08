import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Erreur404 from "./pages/Error404";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Erreur404 />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
};

export default App;
