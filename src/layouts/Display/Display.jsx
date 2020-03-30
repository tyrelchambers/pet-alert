import React from 'react';
import Header from '../Header/Header';
import './Display.css'

const Display = ({children}) => {
  return (
    <>
      <Header />
      <div className="container mx-auto mt-16 h-full flex flex-row p-2 display-wrapper">
        {children}
      </div>
    </>
  );
}

export default Display;
