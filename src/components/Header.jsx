import React from "react";
import { Link } from "react-router-dom";

import imgFood from "../assets/restauranfood.jpg";

const Header = ({ page }) => {
  return (
    <section className="header">
      <div className="container">
        <div className="header-wrapper">
          <div className="left">
            <div className="head">
              Little Lemon <br />
              <span className="sub-head">Chicago</span>
            </div>

            <div className="desc">
              We are family owned Mediterranean restaurant, focused on
              traditional recipes served with a modern twist
            </div>
            {page === "home" ? (
              <Link to="/booking">
                <button className="btn btn-reserve">Reserve a table</button>
              </Link>
            ) : (
              <div className="head">Reservation</div>
            )}
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
