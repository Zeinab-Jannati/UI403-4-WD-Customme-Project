import React, { createContext, useState } from 'react';

export const RegistrationContext = createContext();

export const RegistrationProvider = ({ children }) => {
  const [registrationData, setRegistrationData] = useState({});

  const updateRegistrationData = (newData) => {
    setRegistrationData(prevData => ({ ...prevData, ...newData }));
  };

  const contextValue = {
    registrationData,
    updateRegistrationData,
    setRegistrationData, 
  };

  return (
    <RegistrationContext.Provider value={contextValue}>
      {children}
    </RegistrationContext.Provider>
  );
};
