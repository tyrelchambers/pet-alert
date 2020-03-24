import React from 'react';
import './ExistingAddress.css'

const ExistingAddress = ({data}) => {
  return (
    <div className="address-wrapper">
      <h3 className="address-street">{data.addressStreet}</h3>
      <div className="flex flex-row align-center address-details">
        {data.addressCity}, {data.addressProvinceState}, {data.addressCountry} {data.addressZipPostalCode}
      </div>
    </div>
  );
}

export default ExistingAddress;
