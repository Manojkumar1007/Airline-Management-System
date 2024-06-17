import React, { createContext, useState } from 'react';

export const ProfileContext = createContext();

export const ProfileProvider = ({ children }) => {
  const [profile, setProfile] = useState({
    fullName: 'user',
    email: 'abcdef@gmail.com',
    mobileNumber: '+91 123456789',
  });

  return (
    <ProfileContext.Provider value={{ profile, setProfile }}>
      {children}
    </ProfileContext.Provider>
  );
};
