import {useState} from "react";
import axios from 'axios';
import {useHistory} from 'react-router-dom';
import { Link } from "react-router-dom";
import "./LoginPage.css";

function LoginPage() {

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const { email , password } = formData;
    const history = useHistory();

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async e => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/user/signin', formData);
            history.push('/home');
        } catch (error) {
            console.error(error.response.data);
        }
    }

  return (
    <div className="container">
      <h2>Login</h2>
      <form id="loginForm" onSubmit={onSubmit}>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" value={email} onChange={onChange} required />

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" value={password} onChange={onChange} required />

        <button className="LoginButton" type="submit">
          Login
        </button>
      </form>
      <p>
        Don&apos;t have an account? <Link to="/signup">Sign up here </Link>
      </p>
    </div>
  );
}

export default LoginPage;
