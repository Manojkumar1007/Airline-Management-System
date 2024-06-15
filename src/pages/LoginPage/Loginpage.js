
import {useState} from "react";
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import { Link } from "react-router-dom";
import {useLogin} from "./useLogin"
import "./LoginPage.css";
import { useAuthContext } from "./../../auth/useAuthContext";

function LoginPage() {

  const {user} = useAuthContext()

  const {login,error} = useLogin()
  const [user1,setUser] = useState({
    email: "",
    password: "",
  });
  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setUser({...user1, [name]:value})
  
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(user1);
  }
  return (
    <div className="container">
      <h2>Login</h2>
      <form id="loginForm" onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" value={user1.email} onChange={handleInput} required />

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" value={user1.password} onChange={handleInput} required />

        <button className="LoginButton" type="submit">
          Login
        </button>
      </form>
      <p>
        Don&apos;t have an account? <Link to="/signup">Sign up here </Link>
      </p>
      {error && <div className='error'>{error}</div>}
    </div>
  );
}

export default LoginPage;
