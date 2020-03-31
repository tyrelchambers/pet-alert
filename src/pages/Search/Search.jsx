import React from 'react';
import Display from '../../layouts/Display/Display';
import './Search.css'
import { MainButton } from '../../components/buttons/buttons';

const Search = () => {
  return (
    <Display>
      <div className="flex flex-col justify-center w-full">
        <h1 className="title-lg">Search</h1>
        <div className="flex flex-row">
          <input type="text" className="input search mr-2" placeholder="enter serial number..." />
          <MainButton
            icon={<i className="fas fa-search mr-2"></i>}
            text="Search"
            classes="max-w-xs"
          />
        </div>
      </div>
    </Display>
  );
}

export default Search;
