import React, { useReducer, useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import "./App.css";

import HomePage from "./pages/HomePage";
import BookingPage from "./pages/BookingPage";
import { fetchAPI, submitAPI } from "./api";
import ConfirmedBooking from "./pages/ConfirmedBooking";

function App() {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, "0");
  const day = String(currentDate.getDate()).padStart(2, "0");

  const [date, setDate] = useState(`${year}-${month}-${day}`);

  const initializeTimes = fetchAPI(new Date(date));

  const updateTimes = (state, action) => {
    if (action.type === "change date") state = fetchAPI(new Date(date));
    else state = state.filter((s) => s != action.type);
    return state;
  };

  const [availableTimes, timeDispatch] = useReducer(
    updateTimes,
    initializeTimes
  );

  const navigate = useNavigate();
  const submitForm = (data) => {
    if (submitAPI(data)) {
      navigate("/booking-confirm");
    }
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/booking"
          element={
            <BookingPage
              availableTimes={availableTimes}
              timeDispatch={timeDispatch}
              date={date}
              setDate={setDate}
              submitForm={submitForm}
            />
          }
        />
        <Route path="/booking-confirm" element={<ConfirmedBooking />} />
      </Routes>
    </>
  );
}

export default App;
