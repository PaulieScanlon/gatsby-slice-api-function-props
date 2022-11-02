import React from 'react';
import { Slice } from 'gatsby';

import useDarkMode from '../hooks/use-dark-mode';

const PageElement = ({ children }) => {
  const [darkMode, setDarkMode] = useDarkMode();

  const handleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="mx-auto max-w-3xl">
      <Slice alias="header" darkMode={darkMode} handleTheme={handleTheme} />
      <main className="p-4">{children}</main>
    </div>
  );
};

export default PageElement;
