import React from "react";

import Nav from "../components/Nav";
import Header from "../components/Header";
import About from "../components/About";
import Footer from "../components/Footer";
import Highlights from "../components/Highlights";
import Testimonial from "../components/Testimonial";

const HomePage = () => {
  return (
    <>
      <Nav />
      <Header page="home" />
      <Highlights />
      <Testimonial />
      <About />
      <Footer />
    </>
  );
};

export default HomePage;
