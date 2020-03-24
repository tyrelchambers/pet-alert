import React from 'react';

// Usually included in an existing form
const AddressForm = () => {
  return (
    <>
      <div className="field-group">
        <label htmlFor="addressStreet" className="label">Street Address</label>
        <input type="text" className="input" name="addressStreet" placeholder="enter street address" />
      </div>

      <div className="field-group">
        <label htmlFor="addressCity" className="label">City</label>
        <input type="text" className="input" name="addressCity" placeholder="enter city" />
      </div>

      <div className="field-group">
        <label htmlFor="addressProvinceState" className="label">Province/State</label>
        <input type="text" className="input" name="addressProvinceState" placeholder="enter province or state" />
      </div>

      <div className="field-group">
        <label htmlFor="addressCountry" className="label">Country</label>
        <input type="text" className="input" name="addressCountry" placeholder="enter your country" />
      </div>

      <div className="field-group">
        <label htmlFor="addressZipPostalCode" className="label">Zip/Postal Code</label>
        <input type="text" className="input" name="addressZipPostalCode" placeholder="enter your zip or postal code" />
      </div>
    </>
  );
}

export default AddressForm;
