import React from "react";
import imgSalad from "../assets/greek salad.jpg";

const Highlights = () => {
  return (
    <section className="highlights">
      <div className="container">
        <div className="title">
          <h3>This weeks specials!</h3>
          <button className="btn btn-online-menu">Online Menu</button>
        </div>
        <div className="card-wrapper">
          <div className="card">
            <div className="head">
              <img src={imgSalad} alt="" />
            </div>
            <div className="content">
              <div className="title">
                <div className="name">Greek Sald</div>
                <div className="price">$ 12.99</div>
              </div>
              <div className="desc">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio
                expedita quod saepe voluptates neque, rerum dicta magnam
                adipisci laudantium. Molestiae.
              </div>
              <div className="order">
                <a href="#">Order for delivery</a>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="head">
              <img src={imgSalad} alt="" />
            </div>
            <div className="content">
              <div className="title">
                <div className="name">Greek Sald</div>
                <div className="price">$ 12.99</div>
              </div>
              <div className="desc">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio
                expedita quod saepe voluptates neque, rerum dicta magnam
                adipisci laudantium. Molestiae.
              </div>
              <div className="order">
                <a href="#">Order for delivery</a>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="head">
              <img src={imgSalad} alt="" />
            </div>
            <div className="content">
              <div className="title">
                <div className="name">Greek Sald</div>
                <div className="price">$ 12.99</div>
              </div>
              <div className="desc">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio
                expedita quod saepe voluptates neque, rerum dicta magnam
                adipisci laudantium. Molestiae.
              </div>
              <div className="order">
                <a href="#">Order for delivery</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Highlights;
