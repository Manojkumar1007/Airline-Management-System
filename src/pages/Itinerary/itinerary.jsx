
import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Info } from '../../Helper/helper';
import { FlightContext } from '../../Helper/FlightContext';

function Itinerary() {
  const navigate = useNavigate();
  // const { allInf,setAllInf } = useContext(Info);
  const {flightInfo, selectedSeat} = useContext(FlightContext);
  const [baggage, setBaggage] = useState('none');

  const handleChange = (e) => {
    e.preventDefault();
    setBaggage(...baggage,  e.target.value)
  }

  const handleSelectSeat = () => {
    navigate('/seatselection');
  };

  const handleContinue = () => {
    navigate('/Confirmation');
  };

  return (
    <div className="app-itinerary">
      <header className="header-itinerary">
        <nav className="nav-itinerary">
          <div className="logo-itinerary">Apna Flights</div>
        </nav>
      </header>
      <div className="container-itinerary">
        <div className="content-itinerary">
          <div className="itinerary">
            <h2>View Your Itinerary</h2>
            <div className="itineraryDetails">
              <div className="detail">{flightInfo.flightId.startingCity} to {flightInfo.flightId.destinationCity}</div>
              <div className="detail">
                <span>{flightInfo.flightId.startTime}</span> <span>{flightInfo.flightId.endTime}</span> <span>{flightInfo.flightId.flightNumber}</span>
              </div>
              <div className="detail">{flightInfo.flightId.lastname}</div>
              <div className="detail">Seat: {selectedSeat || 'Unassigned'}</div>
            </div>
            <div className="formGroup">
              <label htmlFor="baggage">Additional Baggage:</label>
              <select
                id="baggage"
                name="baggage"
                value={baggage}
                onChange={handleChange}
              >
                <option value="none">None</option>
                <option value="<10kg">10 kgs</option>
                <option value="<20kg">20 kgs</option>
              </select>
            </div>
            <div className="buttons-itinerary">
              <button className="selectSeat" onClick={handleSelectSeat}>Select/Change Seat</button>
            </div>
            <div className="buttons-itinerary">
              <button className="continue" onClick={handleContinue}>Continue</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Itinerary;