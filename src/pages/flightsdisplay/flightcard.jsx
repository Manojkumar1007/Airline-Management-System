import React,{useState} from "react";
import "./flightdisplay.css";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import details from "./flightdetails";
import { Info } from "../../Helper/helper"
function Flightcard(props) {
  const {allInf,setAllInf} = useContext(Info);
  const navigate = useNavigate()
  const [god,setGod] = useState(false);
  const handleBookClick = (id) => {
    setAllInf(( ) => ({ ...allInf,duration: details[id-1].duration,bookid: id,starttime:details[id-1].starttime,layovers:details[id-1].layovers,endtime:details[id-1].endtime,price:details[id-1].price,flightname:details[id-1].flightname,flightnum:details[id-1].flightnum}));
    setGod(true);
  };
  if(god){
    return navigate('/priceconformationpage')
  }
  return (
    <div className="card">
      <div className="con">
        <div className="col0">
           <h4 className="air">
           {props.flightname}<br />
           <span className="flightnum">{props.flightnum}</span>
         </h4>
        </div>
        <div className="col1">
          <img className="img" src={props.img} alt="flightimg" />
        </div>
        <div className="col2">
          <p className="location">
            {props.starttime}
            <br />
            <span className="city">{allInf.from}</span>
          </p>
        </div>
        <div className="col3">
          <p className="time">
            {props.duration}
            <hr />
            <span>{props.layovers}</span>
          </p>
        </div>
        <div className="col4">
          <p className="location">
            {props.endtime}
            <br />
            <span className="city">{allInf.to}</span>
          </p>
        </div>
        <div className="col5">
          <p className="price">{props.price}</p>
        </div>
        <div className="col6">
          <button className="btn" onClick={() => handleBookClick(props.id) }>Book</button>
        </div>
      </div>
      <hr />
    </div>
  );
}

export default Flightcard;