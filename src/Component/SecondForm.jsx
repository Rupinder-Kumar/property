import React,{useContext} from 'react';
import {FormDataContext} from './Formcontext'

export default function SecondForm() {
    const { updateFormData } = useContext(FormDataContext);
    const handleChange = (e) => {
        const { name, value } = e.target;
        updateFormData({ [name]: value });
      };

  return (
    <>
    <form>
    <h2>Add Address</h2>
    <input
      type="text"
      name="address"
      onChange={handleChange}
      placeholder="Address"
    />
    <input
      type="text"
      name="city"
      onChange={handleChange}
      placeholder="City"
    />
    <input
      type="text"
      name="state"
      onChange={handleChange}
      placeholder="State"
    />
  </form>

      
    </>
  )
}



