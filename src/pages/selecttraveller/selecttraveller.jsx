import React,{useState} from "react";
import './selecttraveller.css';
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { Info } from "../../Helper/helper";

const Selecttravaeller = () => {
    const {allInf,setAllInf} = useContext(Info);
    const {firstname,lastname,dob,email} = allInf;
    const changeHandle = e => {
      setAllInf({...allInf,[e.target.name]:e.target.value})
    }
    const navigate = useNavigate()
    const [seat,setSeat] = useState(false);
    if(seat){
        if(firstname && lastname && dob && email){
            return navigate('/seatselection');
        }
        else{
            alert("Please fill in all the details.");
        }
        
    }
    return (
        <div className="tt">
            <div>
                <div>
                    <h3 className="add-traveller-title">Traveller Details<hr /></h3>
                </div>
                <div className="message-alert">
                    <p className="message-alert-para">
                        <span>
                            <img className="alert-emoji" src="https://cdn0.iconfinder.com/data/icons/social-messaging-ui-color-shapes/128/alert-triangle-orange-512.png" alt="alert-signal" />
                        </span>
                        please ensure that your name matches your govt. ID such as Aadhaar, Passport or Driver's License
                    </p>
                </div>
            </div>
            <div className="contain">
                <div id="traveler-info-form">
                    <div className="form-group gender-options">
                        <label>
                            <input type="radio" name="title" value="Mr" required /> Mr
                        </label>
                        <label>
                            <input type="radio" name="title" value="Ms" required /> Ms
                        </label>
                        <label>
                            <input type="radio" name="title" value="Mrs" required /> Mrs
                        </label>
                    </div>
                    <div className="form-group">
                        <label htmlFor="first-name">First Name</label>
                        <input type="text" name="firstname" value={firstname} onChange={changeHandle} className="form-control" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="last-name">Last Name</label>
                        <input type="text" name="lastname" value={lastname} onChange={changeHandle} className="form-control" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="dob">Date of Birth</label>
                        <input type="date" name="dob" value={dob} onChange={changeHandle} className="form-control" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="text" name="email" value={email} onChange={changeHandle} className="form-control" required />
                    </div>
                    <div>
                      <button className="save-btn" id="bottom-button" onClick={() => setSeat(true)}>Save</button>
                  </div>
                </div>
            </div>
        </div>
    );
}

export default Selecttravaeller;
