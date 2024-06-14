import "./signup_page.css"
import {Link} from "react-router-dom"

function Signup_page(){

    return(
        <div className="container">
            <h2>Create an Account</h2>
            <form id="signupForm" >
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" name="username" required />
        
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />
        
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" required />
                <button type="submit">Sign Up</button>
            </form>
            <p>Already have an account? <Link to="/login">Login here</Link></p>
        </div>
    );
}

export default Signup_page