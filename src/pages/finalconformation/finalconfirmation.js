import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { Info } from "../../Helper/helper";
import './finalconfirmation.css';
const Finalconfirmation = () =>{
  const {allInf,setAllInf} = useContext(Info);
    const navigate = useNavigate()
    const [done,setDone] = useState(false);
    if(done){
        return navigate('/bookingsuccess')
    }
    return(
        <div className="body">
             <div><h1 className="title">Booking Details</h1></div>
              <div className="flight-info">
                 <div>
                     <p className="locations">{allInf.from}<span> → </span>{allInf.to}<br/><span class="info">{allInf.travellingdate}, {allInf.layovers},{allInf.duration}Economy</span></p>
                   </div>
                  <div>
                    <p><span><img className="img" src="https://images.ixigo.com/img/common-resources/airline-new/AI.png" alt="flightimg" /></span> {allInf.flightname} | {allInf.flightnum}</p>
                  </div>
                 <div className="flight-details">
                      <div className="section1">
                          <h3>{allInf.travellingdate}</h3>
                          <p><strong>{allInf.starttime}</strong> {allInf.from}</p>
                          <p>Indira Gandhi Intl Airport</p>
                          <p>Terminal 3</p>
                       </div>
                       <div className="duration">
                          <p><span>{allInf.duration}</span><hr/>{allInf.layovers}</p>
                        </div>
                       <div className="section2">
                           <h3>{allInf.travellingdate}</h3>
                           <p><strong>{allInf.endtime}</strong> {allInf.to}</p>
                           <p>Chatrapati Shivaji International Airport</p>
                           <p>Terminal 2</p>
                        </div>
                       <div className="baggage-info">
                         <h3>Baggage</h3>
                         <p>Per Traveller</p>
                       </div>
                      <div className="cabin-info">
                         <h3>Cabin</h3>
                         <p>7 Kg (1 piece per pax)</p>
                       </div>
                     <div className="checkin-info">
                         <h3>Check-in</h3>
                         <p>15 Kilograms (1 piece per pax)</p>
                      </div>
                  </div>
                </div >
               <div className="traveller-details">
                    <h3>Traveller Details</h3>
                    <p>Name: {allInf.firstname} {allInf.lastname}<br/>Email: {allInf.email}<br />Seat: {allInf.seat}</p>
               </div>
              <div><button className="confirm-button" id="conformButton"  onClick={() => setDone(true)}>Confirm</button></div>
        </div>
        
    )
}
export default Finalconfirmation;