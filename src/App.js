import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Project from "./pages/Project";
import Contact from "./pages/Contact";
import Header from "./components/Header";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* path="*" fonctionne si jamais l'url ne correspond Ã  rien de dÃ©clarer  au dessus */}
          <Route path="*" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/competences" element={<Skills />} />
          <Route path="/portfolio" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
