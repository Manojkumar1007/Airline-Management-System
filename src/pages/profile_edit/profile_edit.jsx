import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './profile_edit.css';
import { ProfileContext } from '../../Helper/ProfileContext.jsx';
import { useCountryCodes } from '../../Helper/useCountryCodes';
import { useSearchableCountryCodeInput } from '../../Helper/useSearchableCountryCodeInput';

const ProfileEdit = () => {
  const { profile, setProfile } = useContext(ProfileContext);

  // Function to parse the full mobile number into country code and mobile number
  const parseMobileNumber = (fullNumber) => {
    if (!fullNumber) return { code: '+91', number: '' };

    // Regex to extract country code (e.g., +1, +91) and the rest of the number
    // It handles cases like "+91 (India) 123456789" or "+91 123456789"
    const match = fullNumber.match(/^(\+\d+)(?:\s*\(.*?\))?\s*(.*)$/);
    if (match) {
      // match[1] is the country code (e.g., "+91")
      // match[2] is the rest of the number (e.g., "123456789")
      return { code: match[1], number: match[2].replace(/[^\d]/g, '') }; // Clean digits from number part
    } else {
      // If no country code found, assume default and fullNumber is the mobile number
      return { code: '+91', number: fullNumber.replace(/[^\d]/g, '') }; // Clean digits from full number
    }
  };

  const { code: initialCountryCode, number: initialMobileNumber } = parseMobileNumber(profile.mobileNumber);
  console.log('profile.mobileNumber from context:', profile.mobileNumber);
  console.log('Parsed initialCountryCode:', initialCountryCode);
  console.log('Parsed initialMobileNumber:', initialMobileNumber);

  const [fullName, setFullName] = useState(profile.fullName);
  const [email, setEmail] = useState(profile.email);
  const [mobileNumber, setMobileNumber] = useState(initialMobileNumber);

  const { countryCodes, loading, error } = useCountryCodes();
  const { 
    countryCode, 
    searchTerm, 
    showDropdown, 
    filteredCountryCodes, 
    dropdownRef, 
    handleInputChange, 
    handleInputFocus, 
    handleOptionClick,
    handleInputBlur,
    setCountryCode // Expose setCountryCode to set it after countryCodes are loaded
  } = useSearchableCountryCodeInput(initialCountryCode, countryCodes);

  const navigate = useNavigate();

  useEffect(() => {
    // Set initial country code if it was parsed from profile.mobileNumber and exists in fetched codes
    // Only set if not already set by the hook's internal logic and if codes are loaded
    if (!loading && countryCodes.length > 0) {
      if (initialCountryCode && countryCodes.some(c => c.code === initialCountryCode)) {
        setCountryCode(initialCountryCode);
      } else if (countryCodes.length > 0) {
        setCountryCode(countryCodes[0].code);
      }
    }
  }, [loading, countryCodes, initialCountryCode, setCountryCode]);

  const saveProfile = () => {
    const cleanMobileNumber = mobileNumber.replace(/[^\d]/g, ''); 
    const fullMobileNumber = `${countryCode}${cleanMobileNumber}`;
    setProfile({ fullName, email, mobileNumber: fullMobileNumber });
    alert('Saved successfully!');
    navigate('/Profile');
  };

  if (loading) {
    return <div className="body-container"><div className="edit-container"><p>Loading country codes...</p></div></div>;
  }

  if (error) {
    return <div className="body-container"><div className="edit-container"><p>{error}</p></div></div>;
  }

  return (
    <div className="body-container">
      <div className="edit-container">
        <div className="edit-header">
          <h2 className="edit-h2">Profile</h2>
        </div>
        <form className="profile-form">
          <label className="edit-label" htmlFor="full-name">Full Name</label>
          <input
            className="edit-input"
            type="text"
            id="full-name"
            name="full-name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
          <label className="edit-label" htmlFor="email">Email</label>
          <input
            className="edit-input"
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label className="edit-label" htmlFor="mobile-number">Mobile Number</label>
          <div className="mobile-input-group" ref={dropdownRef}>
            <div className="country-code-wrapper">
              <input
                type="text"
                className="country-code-input"
                value={searchTerm}
                onChange={handleInputChange}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                placeholder="+Code"
              />
              {showDropdown && filteredCountryCodes.length > 0 && (
                <ul className="country-code-dropdown-list">
                  {filteredCountryCodes.map((country) => (
                    <li key={country.code} onClick={() => handleOptionClick(country.code)}>
                      {country.code} ({country.name})
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <input
              className="edit-input mobile-input"
              type="text"
              id="mobile-number"
              name="mobile-number"
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
            />
          </div>
        </form>
        <button className="save-edit" type="button" onClick={saveProfile}>Save</button>
      </div>
    </div>
  );
};

export default ProfileEdit;