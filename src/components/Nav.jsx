import React from "react";

import logo from "../assets/Logo.svg";

const Nav = () => {
  return (
    <nav>
      <div className="container nav-wrapper">
        <div className="logo">
          <a href="#">
            <img src={logo} alt="" />
          </a>
        </div>
        <ul className="nav-menu">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Menu</a>
          </li>
          <li>
            <a href="#">Reservations</a>
          </li>
          <li>
            <a href="#">Order Online</a>
          </li>
          <li>
            <a href="#">Login</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
