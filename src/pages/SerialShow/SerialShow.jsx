import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom'
import Display from '../../layouts/Display/Display';
import PetProfile from '../../layouts/PetProfile/PetProfile';
import Map from '../../components/Map/Map';

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

      <div className="mt-16">
        <h3 className="title-md">Nearest Veterinary Office</h3>
        <Map/>
      </div>

      <div className="mt-16">
        <h3 className="title-md">Pet Details</h3>
      </div>
    </Display>
  );
}

export default SerialShow;
