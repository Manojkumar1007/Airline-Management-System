import React  from "react";
import {useNavigate} from 'react-router-dom';
import Flightcard from "../flightsdisplay/flightcard";
import flightimg from './image.png';
import './Home.css';
import { Info } from "../../Helper/helper";
import { useContext } from "react";
const Home = () =>{
    const {allInf,setAllInf} = useContext(Info);
    const navigate = useNavigate()
    const handleClick=() =>{
        navigate("/searchflights");
    };
    return(
     <div className="ho">
         <div className="greetings">
             <h2>Travel World with Us</h2>
             <p>Fly the friendly skies!<br/>Low fares,on time flights</p>
             <button className="book-btn" onClick={handleClick}>BOOk</button>
           </div>
      </div>
    
    )
}
export default Home;