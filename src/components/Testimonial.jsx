import React from "react";

import profile from "../assets/profile.png";

const Testimonial = () => {
  return (
    <section className="testimonial">
      <div className="title">Testimonials</div>
      <div className="container">
        <div className="card-wrapper">
          <div className="card">
            <div className="left">
              <img src={profile} alt="profile" />
            </div>
            <div className="right">
              <div className="name">Lorem Ipsum</div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab,
                quam!
              </p>
            </div>
          </div>

          <div className="card">
            <div className="left">
              <img src={profile} alt="profile" />
            </div>
            <div className="right">
              <div className="name">Lorem Ipsum</div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab,
                quam!
              </p>
            </div>
          </div>

          <div className="card">
            <div className="left">
              <img src={profile} alt="profile" />
            </div>
            <div className="right">
              <div className="name">Lorem Ipsum</div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab,
                quam!
              </p>
            </div>
          </div>

          <div className="card">
            <div className="left">
              <img src={profile} alt="profile" />
            </div>
            <div className="right">
              <div className="name">Lorem Ipsum</div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab,
                quam!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
