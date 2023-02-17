import React from "react";
import LandingPage from "./Component/LandingPage";
import {  Route, Routes } from "react-router-dom";

import About from "./Component/About";

import Navbar from "./Component/Navbar";
// import Nextpage from "./Component/Nextpage";

const App = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>

      <main>

    
        <Routes>
          <Route path="/" element={<LandingPage />} exact />
          <Route path="/about" element={<About />} exact />
        </Routes>
      

      </main>


      
    </>
  );
};

export default App;
