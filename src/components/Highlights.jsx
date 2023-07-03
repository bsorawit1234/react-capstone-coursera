import React from "react";
import imgSalad from "../assets/greek salad.jpg";

const Highlights = () => {
  return (
    <section className="highlights">
      <div className="title">
        <h3>This week specials</h3>
        <button className="btn">Online Menu</button>
      </div>
      <div className="wrapper">
        <div className="card">
          <img src={imgSalad} alt="" />
          <div className="title">
            <div className="name">Greek Sald</div>
            <div className="price">$ 12.99</div>
          </div>
          <div className="desc">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio
            expedita quod saepe voluptates neque, rerum dicta magnam adipisci
            laudantium. Molestiae.
          </div>
          <div className="order">
            <a href="#">order for delivery</a>
          </div>
        </div>
        <div className="card">
          <img src={imgSalad} alt="" />
          <div className="title">
            <div className="name">Greek Sald</div>
            <div className="price">$ 12.99</div>
          </div>
          <div className="desc">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio
            expedita quod saepe voluptates neque, rerum dicta magnam adipisci
            laudantium. Molestiae.
          </div>
          <div className="order">
            <a href="#">order for delivery</a>
          </div>
        </div>
        <div className="card">
          <img src={imgSalad} alt="" />
          <div className="title">
            <div className="name">Greek Sald</div>
            <div className="price">$ 12.99</div>
          </div>
          <div className="desc">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio
            expedita quod saepe voluptates neque, rerum dicta magnam adipisci
            laudantium. Molestiae.
          </div>
          <div className="order">
            <a href="#">order for delivery</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Highlights;
