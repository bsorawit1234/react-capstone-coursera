import React, { useState } from "react";

const BookingForm = ({
  availableTimes,
  timeDispatch,
  setDate,
  date,
  submitForm,
}) => {
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("Birthday");

  const getIsFormValid = () => {
    if (
      time == "" ||
      guests < 1 ||
      occasion != "Birthday" ||
      occasion != "Anniversary" ||
      date == ""
    ) {
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setGuests(1);
    setOccasion("Birthday");
    timeDispatch({ type: time });
    setTime("");
    submitForm({
      date,
      time,
      guests,
      occasion,
    });
  };

  return (
    <section className="booking">
      <div className="container">
        <form className="booking-form" onSubmit={handleSubmit}>
          <label htmlFor="res-date">Choose date</label>
          <input
            type="date"
            id="res-date"
            value={date}
            onChange={(e) => {
              setDate(e.target.value);
              timeDispatch({ type: "change date" });
            }}
          />
          <label htmlFor="res-time">Choose time</label>
          <select
            id="res-time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          >
            {availableTimes.map((time) => (
              <option key={time} value={time}>
                {time}
              </option>
            ))}
          </select>
          <label htmlFor="guests">Number of guests</label>
          <input
            type="number"
            placeholder="1"
            min="1"
            max="10"
            id="guests"
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
          />
          <label htmlFor="occasion">Occasion</label>
          <select
            id="occasion"
            value={occasion}
            onChange={(e) => setOccasion(e.target.value)}
          >
            <option value="Birthday">Birthday</option>
            <option value="Anniversary">Anniversary</option>
          </select>
          <input
            className="btn btn-booking"
            type="submit"
            value="Make Your reservation"
            disabled={getIsFormValid()}
          />
        </form>
      </div>
    </section>
  );
};

export default BookingForm;
