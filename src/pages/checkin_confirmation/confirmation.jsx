
import React, {useContext } from 'react';
import {useNavigate} from 'react-router-dom';
import './confirmation.css';
import { Info } from '../../Helper/helper';

function Confirmation() {
  const { allInf } = useContext(Info);
  const navigate=useNavigate();
  const handleOnClick = () => {
    navigate('/'); 
  };
 

  return (
    <div className="container-confirm">
      <header className="header-confirm">
        <h1>Check-In</h1>
      </header>
      <section className="confirmation">
        <h2>Check-In Confirmation</h2>
        <div id="confirmationMessage" className="confirmation-message"></div>
        <div className="flight-info">
          <h3>Flight Information</h3>
          <div className="info-item"><strong>Flight Number:</strong> <span id="flightNumber">{allInf.flightnum}</span></div>
          <div className="info-item"><strong>Departure:</strong> <span id="departure">{allInf.from}</span></div>
          <div className="info-item"><strong>Arrival:</strong> <span id="arrival">{allInf.to}</span></div>
          <div className="info-item"><strong>Departure Time:</strong> <span id="departureTime">{allInf.starttime}</span></div>
          <div className="info-item"><strong>Arrival Time:</strong> <span id="arrivalTime">{allInf.endtime}</span></div>
        </div>
        <div className="seat-selection">
          <h3>Seat Selection</h3>
          <div className="info-item"><strong>Selected Seat:</strong> <span id="selectedSeat">{allInf.seat}</span></div>
        </div>
        <div className="addons">
          <h3>Add-Ons</h3>
          <div className="info-item"><strong>Additional Baggage:</strong> <span id="baggage">{allInf.baggage}</span></div>
        </div>
        <div className="actions">
          <button id="sendEmailButton">Send Email</button>
          <button onClick={handleOnClick}>Home</button>
        </div>
      </section>
    </div>
  );
}

export default Confirmation;
