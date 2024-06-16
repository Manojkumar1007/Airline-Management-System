import React, { useState,useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Info } from '../../Helper/helper';


const CheckInForm = () => {
  const navigate = useNavigate();
  const {allInf ,setAllInf} = useContext(Info);
  const [bookingId, setBookingId] = useState('');
  const [lastName, setLastName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    setAllInf({ ...allInf,bookid: bookingId, lastname: lastName });
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
          value={bookingId}
          onChange={(e) => setBookingId(e.target.value)}
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
