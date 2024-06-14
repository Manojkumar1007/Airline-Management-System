import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import LoginPage from "./pages/LoginPage/Loginpage";
import Signup_page from "./pages/signup_page/signup_page";
import HomePage from './pages/HomePage/HomePage';

function App() {
  
    return(
      
      <Router>
        <div>
          <Routes>
            <Route path='/login' Component={LoginPage} />
            <Route path='/signup' Component={Signup_page} />
            <Route path='/' Component={LoginPage} />
            <Route path='/home' Component={HomePage} />

          </Routes>
        </div>
      </Router>
    );

}

export default App
