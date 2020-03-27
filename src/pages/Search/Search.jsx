import React from 'react';
import Display from '../../layouts/Display/Display';
import './Search.css'

const Search = () => {
  return (
    <Display>
      <div className="flex flex-col justify-center">
        <h1 className="title-lg">Search</h1>
        <input type="text" className="input search" placeholder="enter serial number..." />
      </div>
    </Display>
  );
}

export default Search;
