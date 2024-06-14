import { Link } from "react-router-dom";
import "./LoginPage.css"

function LoginPage(){
    return(
        <div className="container">
        <h2>Login</h2>
        <form id="loginForm">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
            
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" required />
            
            <button className="LoginButton" type="submit">Login</button>
        </form>
        <p>Don&apos;t have an account? <Link to="/signup">Sign up here </Link></p>
      </div>
    );
}

export default LoginPage 