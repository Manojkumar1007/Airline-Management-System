import logo from './logo.svg';
import Navbar from './components/Navbar/Navbar';
import Searchflights from './pages/Searchflights/searchflights';
import Login from './pages/Login/Login';
import Home from './pages/Home/Home';
import { BrowserRouter,Route,Routes} from 'react-router-dom';
import Flightsdisplay from './pages/flightsdisplay/flightdisplay';
import Priceconfirmationpage from './pages/priceconformationpage/priceconfirmation';
import Selecttravaeller from './pages/selecttraveller/selecttraveller';
import Addtraveller from './pages/addtraveller/addtraveller';
import Seatselection from './pages/seatselection/seatselection';
import Finalconfirmation from './pages/finalconformation/finalconfirmation';
import Bookingsuccess from './pages/bookingsucessfull/bookingsucessfull';
import LoginPage from './pages/LoginPage/Loginpage';
import Signup_page from './pages/signup_page/signup_page';
import { Info } from './Helper/helper';
import { useState } from 'react';
function App() {
  const [allInf,setAllInf] = useState({
    from : '',
    to:'',
    travellingdate:'',
    starttime:'',
    duration:'',
    layovers:'',
    endtime:'',
    price:'',
    flightname:'',
    flightnum:'',
    bookid:'',
    firstname:'',
    lastname:'',
    dob:'',
    email:'',
    seat:''
  });
  return (
    <BrowserRouter>
     <Navbar />
     <Routes>
         <Route path='/' element = {<Info.Provider value={{allInf,setAllInf}}><Home/></Info.Provider>} />
         <Route path='/searchflights' element={<Info.Provider value={{allInf,setAllInf}}><Searchflights/></Info.Provider>} />
         <Route path='/login' element={<Login/>} />
         <Route path = '/flightdisplay' element={<Info.Provider value={{allInf,setAllInf}}><Flightsdisplay /></Info.Provider>} />
         <Route path = '/priceconformationpage' element={<Info.Provider value={{allInf,setAllInf}}><Priceconfirmationpage /></Info.Provider>} /> 
         <Route path='/selecttraveller' element={<Info.Provider value={{allInf,setAllInf}}><Selecttravaeller /></Info.Provider>} />
         <Route path='/addtraveller' element = {<Addtraveller />} />
         <Route path='/seatselection' element ={<Info.Provider value={{allInf,setAllInf}}><Seatselection /></Info.Provider>} />
         <Route path='/finalconfirmation' element={<Info.Provider value={{allInf,setAllInf}}><Finalconfirmation /></Info.Provider>} />
         <Route path ='/bookingsuccess' element={<Bookingsuccess />} />
         <Route path = '/loginpage' element = {<LoginPage />} />
         <Route path = '/signup_page' element = {<Signup_page />} />
     </Routes>
     
    </BrowserRouter>
  );
}

export default App;
