import React from "react";

import imgFooter from "../assets/restauranfood.jpg";

const Footer = () => {
  return (
    <section className="footer">
      <div className="container footer-wrapper">
        <div className="logo">
          <img src={imgFooter} alt="" />
        </div>
        <div className="door">
          <h3>
            Doormat <br /> Navigation
          </h3>
          <ul>
            <li>
              <a href="#">home</a>
            </li>
            <li>
              <a href="#">about</a>
            </li>
            <li>
              <a href="#">menu</a>
            </li>
            <li>
              <a href="#">reservations</a>
            </li>
            <li>
              <a href="#">order online</a>
            </li>
            <li>
              <a href="#">login</a>
            </li>
          </ul>
        </div>
        <div className="contact">
          <h3>Contact</h3>
          <ul>
            <li>
              <a href="#">address</a>
            </li>
            <li>
              <a href="#">phone number</a>
            </li>
            <li>
              <a href="#">email</a>
            </li>
          </ul>
        </div>
        <div className="socials">
          <h3>Social Media Links</h3>
          <ul>
            <li>
              <a href="#">address</a>
            </li>
            <li>
              <a href="#">phone number</a>
            </li>
            <li>
              <a href="#">email</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Footer;
