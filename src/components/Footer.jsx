import React from "react";

import imgFooter from "../assets/restauranfood.jpg";

const Footer = () => {
  return (
    <section className="footer">
      <div className="logo">
        <img src={imgFooter} alt="" />
      </div>
      <ul className="door">
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
      <ul className="contact">
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
      <ul className="socials">
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
    </section>
  );
};

export default Footer;
