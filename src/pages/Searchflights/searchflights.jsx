import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import './searchflights.css';
import { Info } from "../../Helper/helper";

const Searchflights = () => {
  const { allInf, setAllInf } = useContext(Info);
  const { startingCity, destinationCity, traveldate } = allInf;

  const changeHandler = e => {
    setAllInf({ ...allInf, [e.target.name]: e.target.value });
  }

  const navigate = useNavigate();
  //const [search, setSearch] = useState(false);

  // if (search) {
  //   if (from && to && travellingdate) {
  //     return navigate('/flightdisplay');
  //   } else {
  //     alert("Please fill in all the details.");
  //   }
  // }

  const handleSubmit = async (e) => {
    e.preventDefault();
    navigate('/flightdisplay', {state: {startingCity,destinationCity,traveldate}});
  };

  return (
    <div>
      <h1 className='heading'>Flight Bookings</h1>
      <div className='box'>
        <h5 className='one-way-title'>One-way</h5>
        <center>
          <form onSubmit={handleSubmit}>
            <div className='form-grp'>
              <label>From:🛫</label><br />
              <select name='from' value={startingCity} onChange={changeHandler} required>
                <option value='' disabled>Select departure city</option>
                <option value='Bangalore'>Bangalore</option>
                <option value='Mumbai'>Mumbai</option>
                <option value='Delhi'>Delhi</option>
                <option value='Chennai'>Chennai</option>
                {/* Add more options as needed */}
              </select><br />
            </div>
            <div className='to-grp'>
              <label>To:🛬</label><br />
              <select name='to' value={destinationCity} onChange={changeHandler} required>
                <option value='' disabled>Select destination city</option>
                <option value='Guwahati'>Guwahati</option>
                <option value='Kolkata'>Kolkata</option>
                <option value='Hyderabad'>Hyderabad</option>
                <option value='Pune'>Pune</option>
                {/* Add more options as needed */}
              </select><br />
            </div>
            <div className='date-grp'>
              <label>Departure Date</label><br />
              <input type='date' name='travellingdate' value={traveldate} onChange={changeHandler} required/>
            </div>
            <div>
              {/* <button type='button' className='search-btn' onClick={() => setSearch(true)}>Search Flights🔍</button><br /> */}
              <button type='submit' className='search-btn'>Search Flights🔍</button>
            </div>
          </form>
        </center>
      </div>
    </div>
  );
}

export default Searchflights;
