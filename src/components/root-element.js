import React from 'react';
import useDarkMode from '../hooks/use-dark-mode';

import Header from '../components/header';

const RootElement = ({ children }) => {
  const [darkMode, setDarkMode] = useDarkMode();

  const handleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="mx-auto max-w-3xl">
      <Header darkMode={darkMode} handleTheme={handleTheme} />
      <main className="p-4">{children}</main>
    </div>
  );
};

export default RootElement;
