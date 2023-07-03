import React, { useState } from "react";
import "./App.css";

import Nav from "./components/Nav";
import Header from "./components/Header";
import Highlights from "./components/Highlights";
import Testimonial from "./components/Testimonial";
import About from "./components/About";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Nav />
      <Header />
      <Highlights />
      <Testimonial />
      <About />
      <Footer />
    </>
  );
}

export default App;
