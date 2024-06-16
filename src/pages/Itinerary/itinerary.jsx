
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Info } from '../../Helper/helper';

function Itinerary() {
  const navigate = useNavigate();
  const { allInf,setAllInf } = useContext(Info);
  const [baggage, setBaggage] = useState('none');
  const handleSelectSeat = () => {
    navigate('/seatselection');
  };

  const handleContinue = () => {
    setAllInf({ ...allInf, baggage });
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
              <div className="detail">{allInf.from} to {allInf.to}</div>
              <div className="detail">
                <span>{allInf.starttime}</span> <span>{allInf.endtime}</span> <span>{allInf.flightnum}</span>
              </div>
              <div className="detail">{allInf.lastname}</div>
              <div className="detail">Seat: {allInf.seat || 'Unassigned'}</div>
            </div>
            <div className="formGroup">
              <label htmlFor="baggage">Additional Baggage:</label>
              <select
                id="baggage"
                name="baggage"
                value={baggage}
                onChange={(e) => (e.target.value)}
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