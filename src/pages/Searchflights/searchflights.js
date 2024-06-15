import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import './searchflights.css';
import { Info } from "../../Helper/helper";

const Searchflights = () => {
  const { allInf, setAllInf } = useContext(Info);
  const { from, to, travellingdate } = allInf;

  const changeHandler = e => {
    setAllInf({ ...allInf, [e.target.name]: e.target.value });
  }

  const navigate = useNavigate();
  const [search, setSearch] = useState(false);

  if (search) {
    if (from && to && travellingdate) {
      return navigate('/flightdisplay');
    } else {
      alert("Please fill in all the details.");
    }
  }

  return (
    <div>
      <h1 className='heading'>Flight Bookings</h1>
      <div className='box'>
        <h5 className='one-way-title'>One-way</h5>
        <center>
          <form>
            <div className='form-grp'>
              <label>From:🛫</label><br />
              <select name='from' value={from} onChange={changeHandler}>
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
              <select name='to' value={to} onChange={changeHandler}>
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
              <input type='date' name='travellingdate' value={travellingdate} onChange={changeHandler} />
            </div>
            <div>
              <button type='button' className='search-btn' onClick={() => setSearch(true)}>Search Flights🔍</button><br />
            </div>
          </form>
        </center>
      </div>
    </div>
  );
}

export default Searchflights;
