import logo from './logo.svg';
import Navbar from './components/Navbar/Navbar.jsx';
import Searchflights from './pages/Searchflights/searchflights.jsx';
import Home from './pages/Home/Home.jsx';
import { BrowserRouter,Route,Routes} from 'react-router-dom';
import Flightsdisplay from './pages/flightsdisplay/flightdisplay.jsx';
import Priceconfirmationpage from './pages/priceconformationpage/priceconfirmation.jsx';
import Selecttravaeller from './pages/selecttraveller/selecttraveller.jsx';
import Seatselection from './pages/seatselection/seatselection.jsx';
import Finalconfirmation from './pages/finalconformation/finalconfirmation.jsx';
import Bookingsuccess from './pages/bookingsucessfull/bookingsucessfull.jsx';
import LoginPage from './pages/LoginPage/Loginpage.jsx';
import Signup_page from './pages/signup_page/signup_page.jsx';
import { Info } from './Helper/helper.jsx';
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
         <Route path = '/flightdisplay' element={<Info.Provider value={{allInf,setAllInf}}><Flightsdisplay /></Info.Provider>} />
         <Route path = '/priceconformationpage' element={<Info.Provider value={{allInf,setAllInf}}><Priceconfirmationpage /></Info.Provider>} /> 
         <Route path='/selecttraveller' element={<Info.Provider value={{allInf,setAllInf}}><Selecttravaeller /></Info.Provider>} />
         <Route path='/seatselection' element ={<Info.Provider value={{allInf,setAllInf}}><Seatselection /></Info.Provider>} />
         <Route path='/finalconfirmation' element={<Info.Provider value={{allInf,setAllInf}}><Finalconfirmation /></Info.Provider>} />
         <Route path ='/bookingsuccess' element={<Bookingsuccess />} />
         <Route path = '/login' element = {<LoginPage />} />
         <Route path = '/signup' element = {<Signup_page />} />
     </Routes>
     
    </BrowserRouter>
  );
}

export default App;
