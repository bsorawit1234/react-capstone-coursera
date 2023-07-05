import React from "react";

import Nav from "../components/Nav";
import Header from "../components/Header";
import BookingForm from "../components/BookingForm";

const BookingPage = ({
  availableTimes,
  timeDispatch,
  date,
  setDate,

  submitForm,
}) => {
  return (
    <>
      <Nav />
      <Header page="booking" />
      <BookingForm
        availableTimes={availableTimes}
        timeDispatch={timeDispatch}
        setDate={setDate}
        date={date}
        submitForm={submitForm}
      />
    </>
  );
};

export default BookingPage;
