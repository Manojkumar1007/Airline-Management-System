import React, { useContext, useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { FlightContext } from '../../Helper/FlightContext';

const CheckInForm = () => {
  const navigate = useNavigate();
  const {pnr, setPnr} = useContext(FlightContext);
  const {lastName, setLastName} = useContext(FlightContext);

  useEffect(() => {

    const savedPnr = localStorage.getItem('pnr');
    const savedLastName = localStorage.getItem('lastName');
    if (savedPnr) setPnr(savedPnr);
    if(savedLastName) setLastName(savedLastName);
  },[setPnr,setLastName]);

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate('/CheckInDetails');
  };

  return (
    <div className="content-checkin">
      <h1>Web Check-In</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="bookingId">PNR/Booking Reference:</label>
        <input
          type="text"
          id="bookingId"
          value={pnr}
          onChange={(e) => setPnr(e.target.value)}
          required
        />
        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          id="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
        <button type="submit">Check-In</button>
      </form>
    </div>
  );
};

export default CheckInForm;