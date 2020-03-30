import React from 'react';
import Header from '../Header/Header';
import './Display.css'
import HomeSubNav from '../HomeSubNav/HomeSubNav';

const Display = ({children}) => {
  return (
    <>
      <Header />
      <div className="container mx-auto mt-16 h-full flex flex-row p-2">
        {children}
      </div>
    </>
  );
}

export default Display;
