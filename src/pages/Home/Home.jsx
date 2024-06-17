import React  from "react";
import {useNavigate} from 'react-router-dom';
import Flightcard from "../flightsdisplay/flightcard";
import flightimg from './image.png';
import './Home.css';
import { useAuthContext } from "../../auth/useAuthContext";
const Home = () =>{
    
    const navigate = useNavigate()
    const {isAuthenticated} = useAuthContext();
    const handleClick=() =>{
        if(isAuthenticated){
            navigate("/searchflights");
        }else{
            alert('Login to continue booking seemlessly');
            navigate("/login");
        }
        
    };
    return(
     <div className="ho">
         <div className="greetings">
         <img className="welocomelogo" src="https://cdn5.vectorstock.com/i/1000x1000/21/39/sign-welcomeview-from-window-airplane-vector-8002139.jpg" alt="welcome-img" />
             <h1>Travel World with Us...</h1>
             <p>Fly the friendly skies!<br/>Low fares,on time flights</p>
             <button className="book-btn" onClick={handleClick}>BOOk</button>
           </div>
      </div>
    
    )
}
export default Home;