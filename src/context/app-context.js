import React, { createContext } from 'react';

import useDarkMode from '../hooks/use-dark-mode';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useDarkMode();

  const handleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <AppContext.Provider
      value={{
        darkMode,
        handleTheme
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
