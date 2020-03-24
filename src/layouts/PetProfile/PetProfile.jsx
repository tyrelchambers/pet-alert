import React from 'react';
import './PetProfile.css'

const PetProfile = () => {
  return (
    <>
      <div className="pet-wrapper flex flex-col items-center">
        <img src={require('../../assets/Untitled-1.jpg')} alt="Pet" className="pet-avatar"/>

        <div className="pet-details flex flex-col items-center mt-2">
          <h2>My name is Stuffy the cat</h2>
          <p>and I'm a Some cat</p>
        </div>
      </div>
    </>
  
  );
}

export default PetProfile;
