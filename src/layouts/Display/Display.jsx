import React from 'react';
import Header from '../Header/Header';
import './Display.css'

const Display = ({children}) => {
  return (
    <div>
      <Header />
      <div className="container mx-auto mt-16">
        {children}
      </div>
    </div>
  );
}

export default Display;
