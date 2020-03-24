import React from 'react';
import {useParams} from 'react-router-dom'
import Display from '../../layouts/Display/Display';
import PetProfile from '../../layouts/PetProfile/PetProfile';

const SerialShow = () => {
  let {slug} = useParams();
  return (
    <Display>
      <div className="bg">
        <h1 className="title-lg">Serial Number: {slug}</h1>
      </div>
      
      <div className="mt-16">
        <PetProfile />
      </div>
    </Display>
  );
}

export default SerialShow;
