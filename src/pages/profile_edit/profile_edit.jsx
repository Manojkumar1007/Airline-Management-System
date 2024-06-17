import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './profile_edit.css';
import { ProfileContext } from '../../Helper/ProfileContext.jsx';

const ProfileEdit = () => {
  const { profile, setProfile } = useContext(ProfileContext);
  const [fullName, setFullName] = useState(profile.fullName);
  const [email, setEmail] = useState(profile.email);
  const [mobileNumber, setMobileNumber] = useState(profile.mobileNumber);
  const navigate = useNavigate();

  const saveProfile = () => {
    setProfile({ fullName, email, mobileNumber });
    alert('Saved successfully!');
    navigate('/Profile');
  };

  const handleBackClick = () => {
    navigate('/Profile');
  };

  return (
    <div className="edit-container">
      <div className="edit-header">
        <button className="back-btn-edit" onClick={handleBackClick}>&lt;</button>
        <h2 className="edit-h2">Profile</h2>
      </div>
      <form className="profile-form">
        <label htmlFor="full-name">Full Name</label>
        <input
          type="text"
          id="full-name"
          name="full-name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
        <br /><br />
        <label className="edit-label" htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br /><br />
        <label className="edit-label"htmlFor="mobile-number">Mobile Number</label>
        <input className="edit-input"
          type="text"
          id="mobile-number"
          name="mobile-number"
          value={mobileNumber}
          onChange={(e) => setMobileNumber(e.target.value)}
        />
      </form>
      <br /><br /><br /><br /><br /><br /><br /><br />
      <button className="save-edit" type="button" onClick={saveProfile}>Save</button>
    </div>
  );
};

export default ProfileEdit;