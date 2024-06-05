import React, { createContext, useState, useContext } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [visibility, setVisibility] = useState("visible");

  return (
    <AppContext.Provider value={{ visibility, setVisibility }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
