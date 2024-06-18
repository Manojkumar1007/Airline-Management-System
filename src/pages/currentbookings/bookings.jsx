import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './bookings.css';

const BookingsPage = () => {
  const [activeTab, setActiveTab] = useState('none');
  const navigate = useNavigate();

  const handleMouseEnter = (tab) => {
    setActiveTab(tab);
  };

  const handleMouseLeave = () => {
    setActiveTab('none');
  };

  const handleBackClick = () => {
    navigate('/Profile');
  };

  return (
    <div className="bookings-container">
      <button className="back-button-book" onClick={handleBackClick}>Back</button>
      <div className="tabs-book">
        <div
          className={`tab-book ${activeTab === 'current' ? 'active' : ''}`}
          onMouseEnter={() => handleMouseEnter('current')}
          onMouseLeave={handleMouseLeave}
        >
          Current Bookings
        </div>
        <div
          className={`tab-book ${activeTab === 'cancelled' ? 'active' : ''}`}
          onMouseEnter={() => handleMouseEnter('cancelled')}
          onMouseLeave={handleMouseLeave}
        >
          Cancelled Bookings
        </div>
        <div
          className={`tab-book ${activeTab === 'past' ? 'active' : ''}`}
          onMouseEnter={() => handleMouseEnter('past')}
          onMouseLeave={handleMouseLeave}
        >
          Past Flights
        </div>
      </div>
      <div className="content-book">
        {activeTab === 'current' && (
          <div className="bookings-content">
              <div className='book-cont'>
                <div className='col0-b'> 
                 <img className='img' src="https://images.ixigo.com/img/common-resources/airline-new/AI.png" alt="flightimg" />
                </div>
                <div className="col1-b">
                  <h4 className="air">
                   Akasa<br />
                   <span className="flightnum">iQ 123</span>
                 </h4>
               </div>
               <div className="col2-b">
                 <p className="location">
                   6.00
                   <br />
                   <span className="city">Blr</span>
                 </p>
               </div>
               <div className="col3-b">
                 <p className="time">
                    3h 50m
                    <hr />
                   <span>non-stop</span>
                 </p>
               </div>
               <div className="col4-b">
                 <p className="location">
                   9.00
                   <br />
                   <span className="city">gwt</span>
                 </p>
               </div>
             </div>
          </div>
        )}
        {activeTab === 'cancelled' && (
          <div className="bookings-content">
            <p>No available data</p>
          </div>
        )}
        {activeTab === 'past' && (
          <div className="bookings-content">
            <p>No available data</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookingsPage;
