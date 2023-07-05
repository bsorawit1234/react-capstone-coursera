import React from "react";

import Nav from "../components/Nav";
import Header from "../components/Header";

const ConfirmedBooking = () => {
  return (
    <>
      <Nav />
      <Header page="booking" />
      <div className="confirm">Confirmed Booking</div>
    </>
  );
};

export default ConfirmedBooking;
