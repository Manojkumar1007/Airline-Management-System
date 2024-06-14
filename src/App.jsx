import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import LoginPage from "./pages/LoginPage/Loginpage";
import Signup_page from "./pages/signup_page/signup_page";

function App() {
  
    return(
      
      <Router>
        <div>
          <Routes>
            <Route path='/login' Component={LoginPage} />
            <Route path='/signup' Component={Signup_page} />
            <Route path='/' Component={LoginPage} />

          </Routes>
        </div>
      </Router>
    );

}

export default App
