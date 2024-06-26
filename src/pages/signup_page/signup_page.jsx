import { useState } from "react";
import axios from "axios";
import "./signup_page.css"
import {Link, useNavigate } from "react-router-dom"
import {useSignup} from "./useSignup"

function Signup_page(){
    const {signup,error} = useSignup();
    const [user, setUser] = useState({
        username: '',
        email: '',
        password: ''
    });

    const navigate = useNavigate();

    const handleInput = e => {
        const {name,value} = e.target ;
        setUser({ ...user, [name]: value})
     } ;

    const handleSubmit = async e => {
        e.preventDefault();
        const success = await signup(user);
        if(success){
            navigate("/login",{replace:true});
            setUser({
                username: "",
                email:"",
                password: "",
            });
        }else{
            console.log(e);
        }
    }

    return(
        <div className="container">
            <h2 className="h2">Create an Account</h2>
            <form className="form" id="signupForm" onSubmit={handleSubmit} >
                <label className="label"htmlFor="username">Username:</label>
                <input className="input"type="text" id="username" value={user.username} onChange={handleInput} name="username" required />
        
                <label className="label"htmlFor="email">Email:</label>
                <input className="input"type="email" id="email" value={user.email} onChange={handleInput} name="email" required />
        
                <label className="label-"htmlFor="password">Password:</label>
                <input className="input"type="password" id="password" value={user.password} onChange={handleInput} name="password" required />

                <button type="submit">Sign Up</button>
            </form>
            <p>Already have an account? <Link to="/login">Login here</Link></p>
            {error && <div className='error'>{error}</div>}
        </div>
    );
}

export default Signup_page