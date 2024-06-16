// FlightContext.js
import React, { createContext, useState } from 'react';

export const FlightContext = createContext();

export const FlightProvider = ({ children }) => {
  const [flightDetails, setFlightDetails] = useState(null);
  const [traveller, setTraveller] = useState(null);
  const [selectedSeat, setSelectedSeat] = useState(null);

  return (
    <FlightContext.Provider value={{ flightDetails, setFlightDetails, traveller, setTraveller, selectedSeat, setSelectedSeat }}>
      {children}
    </FlightContext.Provider>
  );
};
