import React from "react";

import img1 from "../assets/Mario and Adrian A.jpg";
import img2 from "../assets/Mario and Adrian b.jpg";

const About = () => {
  return (
    <section className="about">
      <div className="left">
        <div className="head">Little Lemon</div>
        <div className="sub-head">Chicago</div>
        <div className="desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel sapiente
          iste quaerat qui esse odit pariatur omnis aperiam a consequuntur.
        </div>
      </div>
      <div className="right">
        <img src={img1} alt="" />
        <img src={img2} alt="" />
      </div>
    </section>
  );
};

export default About;
