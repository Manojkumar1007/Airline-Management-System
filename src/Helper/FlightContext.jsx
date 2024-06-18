// FlightContext.js
import React, { createContext, useEffect, useState } from 'react';

export const FlightContext = createContext();

export const FlightProvider = ({ children }) => {
  const [flightDetails, setFlightDetails] = useState(() => {
    const savedFlightDetails = localStorage.getItem('flightDetails');
    return savedFlightDetails ? JSON.parse(savedFlightDetails) : {} ;
  });
  const [traveller, setTraveller] = useState(() => {
    const savedTraveller = localStorage.getItem('traveller');
    return savedTraveller ? JSON.parse(savedTraveller) : {} ;
  });
  const [selectedSeat, setSelectedSeat] = useState( () => {
    const savedSelectedSeat = localStorage.getItem('selectedSeat');
    return savedSelectedSeat ? (savedSelectedSeat) : null ;
  });
  const [pnr, setPnr] = useState( () => {
    const savedPnr = localStorage.getItem('pnr');
    return savedPnr ? (savedPnr) : null ;
  });
  const [lastName, setLastName] = useState(() => {
    const savedLastName = localStorage.getItem('lastName');
    return savedLastName ? (savedLastName) : null ;
  });
  const [flightInfo, setFlightInfo] = useState(() => {
    const savedFlightInfo = localStorage.getItem('flightInfo');
    return savedFlightInfo ? JSON.parse(savedFlightInfo) : {} ;
  });
  const [baggage, setBaggage] = useState(() => {
    const savedBaggage = localStorage.getItem('baggage');
    return savedBaggage ? (savedBaggage) : 'none' ;
  });

  useEffect(()=> {
    localStorage.setItem('flightDetails', JSON.stringify(flightDetails));
  }, [flightDetails]);

  useEffect(() => {
    localStorage.setItem('traveller', JSON.stringify(traveller));
  }, [traveller]);

  useEffect(() => {
    localStorage.setItem('selectedSeat', selectedSeat);
  }, [selectedSeat]);

  useEffect(() => {
    localStorage.setItem('pnr', pnr);
  }, [pnr]);

  useEffect(() => {
    localStorage.setItem('lastName', lastName);
  }, [lastName]);

  useEffect(() => {
    localStorage.setItem('flightInfo', JSON.stringify(flightInfo));
  }, [flightInfo]);

  useEffect(() => {
    localStorage.setItem('baggage', baggage);
  }, [baggage]);

  return (
    <FlightContext.Provider value={{ 
        flightDetails, setFlightDetails,
        traveller, setTraveller, 
        selectedSeat, setSelectedSeat, 
        pnr, setPnr, 
        lastName, setLastName, 
        flightInfo, setFlightInfo, 
        baggage, setBaggage 
    }}>
      {children}
    </FlightContext.Provider>
  );
};
