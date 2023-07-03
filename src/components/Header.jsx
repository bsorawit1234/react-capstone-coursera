import React from "react";
import imgFood from "../assets/restauranfood.jpg";

const Header = () => {
  return (
    <section className="header">
      <div className="container">
        <div className="header-wrapper">
          <div className="left">
            <div className="title">Little Lemon</div>
            <div className="second-title">Chicago</div>
            <div className="content">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus soluta tenetur ea nihil eveniet. Omnis, at. Sint quam
              omnis recusandae.
            </div>
            <button className="btn">Reserve a table</button>
          </div>
          <div className="right">
            <img src={imgFood} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
