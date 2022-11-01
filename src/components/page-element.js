import React from 'react';
import { Slice } from 'gatsby';

const PageElement = ({ children }) => {
  return (
    <div className="mx-auto max-w-3xl">
      <Slice alias="header" />
      <main className="p-4">{children}</main>
    </div>
  );
};

export default PageElement;
