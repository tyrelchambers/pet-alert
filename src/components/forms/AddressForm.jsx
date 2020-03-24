import React from 'react';
import { inject, observer } from 'mobx-react';

// Usually included in an existing form
const AddressForm = ({UserStore}) => {
  const address = UserStore.address;
  return (
    <>
      <div className="field-group">
        <label htmlFor="addressStreet" className="label">Street Address</label>
        <input type="text" className="input" name="addressStreet" placeholder="enter street address" value={address.street} onChange={(e) => UserStore.updateAddress("street", e.target.value)}/>
      </div>

      <div className="field-group">
        <label htmlFor="addressCity" className="label">City</label>
        <input type="text" className="input" name="addressCity" placeholder="enter city" value={address.city} onChange={(e) => UserStore.updateAddress("city", e.target.value)}/>
      </div>

      <div className="field-group">
        <label htmlFor="addressProvinceState" className="label">Province/State</label>
        <input type="text" className="input" name="addressProvinceState" placeholder="enter province or state" value={address.provinceState} onChange={(e) => UserStore.updateAddress("provinceState", e.target.value)}/>
      </div>

      <div className="field-group">
        <label htmlFor="addressCountry" className="label">Country</label>
        <input type="text" className="input" name="addressCountry" placeholder="enter your country" value={address.country} onChange={(e) => UserStore.updateAddress("country", e.target.value)}/>
      </div>

      <div className="field-group">
        <label htmlFor="addressZipPostalCode" className="label">Zip/Postal Code</label>
        <input type="text" className="input" name="addressZipPostalCode" placeholder="enter your zip or postal code" value={address.zipPostalCode} onChange={(e) => UserStore.updateAddress("zipPostalCode", e.target.value)}/>
      </div>
    </>
  );
}

export default inject("UserStore")(observer(AddressForm));
