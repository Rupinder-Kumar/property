import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Form2 = () => {

    const navigateto=useNavigate('')



  const countryData = [
    {
      cname: 'India',
      state: ['Haryana', 'Punjab'],
    },
    {
      cname: 'Australia',
      state: ['Victoria', 'Western Australia'],
    },
    {
        cname: 'united state',
        state: ['washigton', 'california'],
      },
  ];

  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedState, setSelectedState] = useState('');

  const handleCountryChange = (e) => {
    setSelectedCountry(e.target.value);
    setSelectedState('');
  };

  const handleStateChange = (e) => {
    setSelectedState(e.target.value);
  };


// for country name
  const countryOptions = (
    <select id="country" onChange={handleCountryChange}>
      <option value="">Select country</option>

      {countryData.map((item, index) => (
        <option key={index} value={item.cname}>
          {item.cname}
        </option>
      ))}
    </select>
  );

//   for state name
  const stateOptions = (
    <select id="state" onChange={handleStateChange}>
      <option value="">Select state</option>

      {countryData
        
        .find((item) => item.cname === selectedCountry)
        ?.state.map((state, index) => (
          <option key={index}>{state}</option>
        ))
      }
    </select>
  );

  const nexttoconfirm=(e)=>{
      e.preventDefault();
      navigateto('/Form3')
  }

  return (
    <>
    
    <div>
    <form className='addform'>
    
    
      <h3>Add address</h3>
      <label>Selet country:</label>
      {countryOptions}
      <label>Select State:</label>
      {stateOptions}

      <button className='btn btn-primary mt-4'  onClick={nexttoconfirm}>next</button>
      </form>
    </div>
    </>
  );
};

export default Form2;
