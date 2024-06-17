// FlightContext.js
import React, { createContext, useState } from 'react';

export const FlightContext = createContext();

export const FlightProvider = ({ children }) => {
  const [flightDetails, setFlightDetails] = useState(null);
  const [traveller, setTraveller] = useState(null);
  const [selectedSeat, setSelectedSeat] = useState(null);
  const [pnr, setPnr] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [flightInfo, setFlightInfo] = useState(null);
  const [baggage, setBaggage] = useState('none');

  return (
    <FlightContext.Provider value={{ flightDetails, setFlightDetails, traveller, setTraveller, selectedSeat, setSelectedSeat, pnr, setPnr, lastName, setLastName, flightInfo, setFlightInfo, baggage, setBaggage }}>
      {children}
    </FlightContext.Provider>
  );
};
