import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Info } from '../../Helper/helper';
import { useContext } from 'react';
const CheckInDetails = () => {
  const navigate = useNavigate();
  const {allInf} = useContext(Info);
  const handleContinue = () => {
    navigate('/Itinerary');
  };

  return (
    <div className="container-Details">
      <header>
        <div className="navbar-Details">
          <div className="right-section">
            <div className="user-login">
              <p>Welcome, {allInf.firstname} {allInf.lastname}</p>
            </div>
          </div>
        </div>
      </header>
      <main>
        <div className="flight-info">
          <div className="flight-details">
            <div className="flight-route">
              <span className="info-label">Flight-Details: </span>
              <br />
              <span className="airport-code">{allInf.flightname}</span>
              <span className="airport-code">{allInf.flightnum}</span>
            </div>
            <div className="flight-destination">
              <span>{allInf.from}</span>
              <span>  --  </span>
              <span>{allInf.to}</span>
            </div>
          </div>
          <br />
          <div className="flight-date">
            <div className="flight-date-item">
              <span className="info-label">Date: </span>
              <span>{allInf.travellingdate}</span>
            </div>
          </div>
          <br />
          <div className="passenger-info">
            <div className="passenger-info-item">
              <span className="info-label">layovers: </span>
              <span>{allInf.layovers}</span>
            </div>
          </div>
        </div>
        <div className="check-in-form">
          <label htmlFor="nameInput" className="info-label">Name:</label>
          <input
            type="text"
            id="nameInput"
            placeholder="Enter your name"
            value={`${allInf.firstname} ${allInf.lastname}`}
            readOnly
          />
          <button onClick={handleContinue}>CONTINUE</button>
        </div>
      </main>
    </div>
  );
};

export default CheckInDetails;
