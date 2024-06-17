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
            <p>No available data</p>
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
