import React from "react";
import "./Navbar.css";
import {NavLink} from "react-router-dom";
const Navbar = () => {
    return(
        <div className="navbar">
            <div className="airlines">
                <h3>@ApnaFlights</h3>
            </div>
            <div className="paths">
                <ul>
                    <NavLink to = '/'><li>Home</li></NavLink>
                    <NavLink to = '/'><li>Check-in</li></NavLink>
                    <NavLink to = './login'><li>Log-in</li></NavLink>
                </ul>
                
            </div>
        </div>
    )
}
export default Navbar;