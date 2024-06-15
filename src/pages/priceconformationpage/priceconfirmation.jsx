import React,{useState}from "react";
import "./priceconfirmation.css";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { Info } from "../../Helper/helper";
function Priceconfirmationpage(){
   const {allInf,setAllInf} = useContext(Info);
   const navigate = useNavigate();
   const [price,setPrice] = useState(false);
   if(price){
      return navigate('/selecttraveller')
   }
    return(
        <div className="back">
           <div><h1 className="title">Review & Traveller Details</h1></div>
         <div className="flight-info">
             <div>
                 <p className="locations">{allInf.from}<span> → </span>{allInf.to}<br/><span className="info">{allInf.travellingdate}, {allInf.layovers},{allInf.duration},Economy</span></p>
              </div>
             <div>
                 <p><span><img className="img" src="https://images.ixigo.com/img/common-resources/airline-new/AI.png" alt="flightimg" /></span> {allInf.flightname} | {allInf.flightnum}</p>
                </div>
             <div className="flight-details">
                 <div className="section1">
                 <h3>{allInf.travellingdate}</h3>
                 <p><strong>{allInf.starttime}</strong> - {allInf.from}</p>
                 <p>Indira Gandhi Intl Airport</p>
                 <p>Terminal 3</p>
                  </div>
                  <div className="duration">
                     <p><span>{allInf.duration}</span><hr/>{allInf.layovers}</p>
                   </div>
                  <div className="section2">
                     <h3>{allInf.travellingdate}</h3>
                      <p><strong>{allInf.endtime}</strong> -{allInf.to}</p>
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
            </div>
          <div className="fare-summary">
             <div className="fare-item">
                 <div className="fare-description">Fare Summary</div>
                 <div className="fare-amount">1 Traveller </div>
                </div>
             <div className="fare-item">
                  <div className="fare-description">Fare Type</div>
                  <div className="fare-amount">Partially Refundable</div>
                </div>
             <div class="fare-item">
                 <div className="fare-description">Base Fare</div>
                 <div className="fare-amount">₹{allInf.price}</div>
             </div>
              <div class="fare-total">
                   <div className="fare-description">Total Amount</div>
                   <div className="fare-amount">₹{allInf.price}</div>
              </div>
              <div className="fare-amount"><button class="continue-button" id="continueButton" onClick={() => setPrice(true)}>Continue</button></div>
           </div>
        </div>
    );
}
export default Priceconfirmationpage;

