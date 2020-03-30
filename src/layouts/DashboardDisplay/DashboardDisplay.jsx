import React from 'react';
import HomeSubNav from '../HomeSubNav/HomeSubNav';

const DashboardDisplay = ({children}) => {
  return (
    <>
      <HomeSubNav/>
      <div className="flex flex-col container">
        {children}
      </div>
    </>
  );
}

export default DashboardDisplay;
