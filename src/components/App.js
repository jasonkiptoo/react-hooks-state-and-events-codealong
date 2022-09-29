import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Login from "./Login";
import NavBar from "./NavBar";

import Toggle from "./Toggle";

function App() {
  return (
    <div>
      <NavBar />
      {/* <About />
      <Home /> */}
      <Routes>
        <Route exact path="/about" element={<About />} />

        <Route exact path="/login" element={<Login />} />

        <Route exact path="/" element={<Home />} />
        <Route exact path="/toggle" element={<Toggle />} />
      </Routes>
    </div>
  );
}

export default App;
