import React, { useState, useEffect } from "react";
import Flightcard from "./flightcard";
import details from "./flightdetails";
import { Info } from "../../Helper/helper";
import { useLocation} from "react-router-dom";

const Createflight =() => {
  return (
    <Flightcard
      key={details.id}
      flightname={details.flightname}
      flightnum={details.flightnum}
      starttime={details.starttime}
      startingcity={details.from}
      duration={details.duration}
      layovers={details.layovers}
      endtime={details.endtime}
      endcity={details.endcity}
      price={details.price}
    />
  );
}
function Flightsdisplay() {
  //const {allInf,setAllInf} = useContext(Info);
  const location = useLocation();
  const {startingCity, destinationCity, travelDate} = location.state;
  const [flights, setFlights] = useState([]);

  useEffect(() => {
    const fetchFlights = async () => {
      const response = await fetch('http://localhost:5000/admin/flights/search',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({startingCity, destinationCity, travelDate}),
      });
      const data = await response.json();
      setFlights(data);
    };

    fetchFlights();
  }, [startingCity, destinationCity, travelDate]);

  return (
    //details.map(Flightcard)
    <div>
      {flights.length > 0 ? (
        flights.map((flight) => (
          <Flightcard 
            key={flight._id}
            id={flight._id}
            flightname={flight.companyName}
            flightnum={flight.flightNumber}
            starttime={new Date(flight.startTime).toLocaleTimeString()}
            duration={`${Math.floor((new Date(flight.endTime)-new Date(flight.startTime))/60000)} min`}
            layovers={flight.layovers}
            endtime={new Date(flight.endTime).toLocaleTimeString()}
            price={`Rs. ${flight.pricePerSeat}`}
            from={flight.startingCity}
            to={flight.destinationCity}
          />
        ))
      ):(
        <p>No flights found 😔</p>
      )}
    </div>
  );
}
export default Flightsdisplay;
