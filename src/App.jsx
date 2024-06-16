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
import CheckInForm from './pages/checkin/checkin.jsx';
import CheckInDetails from './pages/checkin_details/checkin_details.jsx';
import Itinerary from './pages/Itinerary/itinerary.jsx';
import Confirmation from './pages/checkin_confirmation/confirmation.jsx';
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
    seat:'',
    baggage:''
  });
  return (
    <BrowserRouter>
     <Navbar />
     <Routes>
         <Route path='/' element = {<Info.Provider value={{allInf,setAllInf}}><Home/></Info.Provider>} />
         <Route path='/searchflights' element={<Info.Provider value={{allInf,setAllInf}}><Searchflights/></Info.Provider>} />
         <Route path = '/flightdisplay' element={<Info.Provider value={{allInf,setAllInf}}><Flightsdisplay /></Info.Provider>} />
         <Route path = '/priceconfirmationpage' element={<Info.Provider value={{allInf,setAllInf}}><Priceconfirmationpage /></Info.Provider>} /> 
         <Route path='/selecttraveller' element={<Info.Provider value={{allInf,setAllInf}}><Selecttravaeller /></Info.Provider>} />
         <Route path='/seatselection' element ={<Info.Provider value={{allInf,setAllInf}}><Seatselection /></Info.Provider>} />
         <Route path='/finalconfirmation' element={<Info.Provider value={{allInf,setAllInf}}><Finalconfirmation /></Info.Provider>} />
         <Route path ='/bookingsuccess' element={<Bookingsuccess />} />
         <Route path = '/login' element = {<LoginPage />} />
         <Route path = '/signup' element = {<Signup_page />} />
         <Route path='/checkin' element={<Info.Provider value={{allInf,setAllInf}}><CheckInForm/></Info.Provider>} />
         <Route path='/CheckInDetails' element={<Info.Provider value={{allInf,setAllInf}}><CheckInDetails/></Info.Provider>} />
         <Route path='/Itinerary' element={<Info.Provider value={{allInf,setAllInf}}><Itinerary/></Info.Provider>} />
         <Route path='/Confirmation' element={<Info.Provider value={{allInf,setAllInf}}><Confirmation/></Info.Provider>} />
     </Routes>

    </BrowserRouter>
  );
}

export default App;
