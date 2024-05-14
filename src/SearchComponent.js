import React, { useState, useEffect,useLocation } from 'react';
import axios from 'axios'; 
import  List  from "./List";
import  PropertiesFilter  from "./PropertiesFilter";
import {Routes,Route,useNavigate,BrowserRouter,Link}  from "react-router-dom"

const suggestions = ['Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal'];

const SearchComponent = () => {
	
  const  navigate=useNavigate();
  const [inputValue, setInputValue] = useState('');
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [selectedPrice, setSelectedPrice] = useState('');
  const [selectedBhk, setSelectedBhk] = useState('');
  const [selectedPropertyType, setSelectedPropertyType] = useState('');
  const [Allproperty, setAllproperty] = useState([]);


 const [propertyType, setPropertyType] = useState([]);
  const [budget, setBudget] = useState('');
  const [bhk, setBhk] = useState('');
  
  
  
  useEffect(() => {
    setFilteredSuggestions(suggestions.filter(suggestion =>
      suggestion.toLowerCase().includes(inputValue.toLowerCase())
    ));
  }, [inputValue]);

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);
    setShowSuggestions(value.length > 0);
    setShowFilters(value.length > 0);
  };

  const handleSuggestionClick = (suggestion) => {
    setInputValue(suggestion);
    setShowSuggestions(false);
    setShowFilters(true);
  };

const listdata =()=>
{
	//navigate("/list")
	alert()
	
}
  const handleDocumentClick = (event) => {
    if (!event.target.closest('#search-container')) {
      setShowSuggestions(false);
      setShowFilters(true);
    }
  };
 

 const [selectedFilters, setSelectedFilters] = useState({ BHK: [] });

  const handleCheckboxChange = (event) => {
    const { name, value, checked } = event.target;
    setSelectedFilters(prevState => {
      const newState = { ...prevState };
      newState[name] = newState[name] || [];
      newState[name] = checked
        ? [...newState[name], value]
        : newState[name].filter(val => val !== value);
      return newState;
    });
  };

 const handleFilterSubmission = () => {
  const payload = { filters: selectedFilters };
	console.log(payload)
  axios.post('http://localhost:4300/property_filter', payload)
    .then(response => {
      const dataProp = response.data;
	  setAllproperty(dataProp);
	  console.log('Good'+Allproperty);
	  navigate('/PropertiesFilter', { state: { xyz: dataProp } });
    })
    .catch(error => {
      console.error('Error fetching filtered data:', error);
    });
};
  useEffect(() => {
    console.log('Good', Allproperty);
	
  }, [Allproperty]);
  
  useEffect(() => {
    document.addEventListener('click', handleDocumentClick);
    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, []);

  return (
  

    <div className="search--container">
      <div id="search__container">
        <div id="search-container">
          <input
            type="text"
            id="search-input"
            placeholder="Search..."
            value={inputValue}
            onChange={handleInputChange}
          />
          <div id="suggestion-container" style={{ display: showSuggestions ? 'block' : 'none' }}>
            {filteredSuggestions.map((suggestion, index) => (
              <div
                key={index}
                className="suggestion-item"
                onClick={() => handleSuggestionClick(suggestion)}
              >
                {suggestion}
              </div>
            ))}
          </div>
        </div>
        <div className={`filters ${showFilters ? '' : 'hidden'}`}>
          <div className="filters ">
      <div className="subnav">
        <button className="subnavbtn">
          BHK <i className="fa fa-angle-down" />
        </button>
        <div className="subnav-content">
          <div className="show-dropdown">
            <label htmlFor="beds1-mod-multiSelectOptions-1">
              <input
                id="beds1-mod-multiSelectOptions-1"
                type="checkbox"
                data-type="multiple-select-option"
                data-value={1}
                data-name="beds"
                name="bedroom"
				onChange={handleCheckboxChange}
                defaultValue={1}
              />
              <span>
                <span> 1 BHK </span>
                <span />
                <span>
                  {" "}
                  <i />{" "}
                </span>
              </span>
            </label>
            <label htmlFor="beds2-mod-multiSelectOptions-1">
              <input
                id="beds2-mod-multiSelectOptions-1"
                type="checkbox"
                data-type="multiple-select-option"
                data-value={2}
                data-name="beds"
                name="bedroom"
				onChange={handleCheckboxChange}
                defaultValue={2}
              />
              <span>
                <span> 2 BHK </span>
                <span />
                <span>
                  {" "}
                  <i />{" "}
                </span>
              </span>
            </label>
            <label htmlFor="beds3-mod-multiSelectOptions-1">
              <input
                id="beds3-mod-multiSelectOptions-1"
                type="checkbox"
                data-type="multiple-select-option"
                data-value={3}
                data-name="beds"
                name="bedroom"
				onChange={handleCheckboxChange}
                defaultValue={3}
              />
              <span>
                <span> 3 BHK </span>
                <span />
                <span>
                  {" "}
                  <i />{" "}
                </span>
              </span>
            </label>
            <label htmlFor="beds4-mod-multiSelectOptions-1">
              <input
                id="beds4-mod-multiSelectOptions-1"
                type="checkbox"
                data-type="multiple-select-option"
                data-value="3plus"
                data-name="beds"
                name="bedroom"
				onChange={handleCheckboxChange}
                defaultValue="3plus"
              />
              <span>
                <span> 3+ BHK </span>
                <span />
                <span>
                  {" "}
                  <i />{" "}
                </span>
              </span>
            </label>
          </div>
        </div>
      </div>
      <div className="subnav">
        <button className="subnavbtn">
          BUDGET <i className="fa fa-angle-down" />
        </button>
        <div className="subnav-content">
          <div className="show--dropdown">
				<ul className="price_list">
				<li>
				<input type="checkbox" id="any_price" value="All" name="propertyPrice" onchange="handleFilterByPrice(0, 9000000)" onChange={handleCheckboxChange}/>
				<label for="any_price">Any Price</label>
				</li>
				<li>
				<input type="checkbox" id="10l_25l" value="1000000','2500000" name="propertyPrice" onchange="handleFilterByPrice(1000000, 2500000)" onChange={handleCheckboxChange}/>
				<label for="10l_25l">10L-25L</label>
				</li>
				<li>
				<input type="checkbox" id="30l_50l" value="3000000','5000000" name="propertyPrice" onchange="handleFilterByPrice(3000000, 5000000)" onChange={handleCheckboxChange}/>
				<label for="30l_50l">30L-50L</label>
				</li>
				<li>
				<input type="checkbox" id="50l_90l" value="5000000','9000000" name="propertyPrice" onchange="handleFilterByPrice(5000000, 9000000)" onChange={handleCheckboxChange}/>
				<label for="50l_90l">50L-90L</label>
				</li>
				</ul>
          </div>
        </div>
      </div>
      <div className="subnav">
        <button className="subnavbtn">
          PROPERTY TYPE
          <i className="fa fa-angle-down" />
        </button>
        <div className="subnav-content">
          <div className="show--dropdown">
            <div className="prop-type">
              <label htmlFor="propertyType0-mod-multiSelectOptions-2">
                <input
                  id="propertyType0-mod-multiSelectOptions-2"
                  type="checkbox"
                  data-type="multiple-select-option"
                  data-value="apartment"
                  data-name="propertyType"
                  name="propertyType"
                  defaultValue="Apartment"
                  data-label="Apartment"
				  onChange={handleCheckboxChange}
                />
                <span>Apartment</span>
              </label>
              <label htmlFor="propertyType1-mod-multiSelectOptions-2">
                <input
                  id="propertyType1-mod-multiSelectOptions-2"
                  type="checkbox"
                  data-type="multiple-select-option"
                  data-value="builder-floor"
                  data-name="propertyType"
                  name="propertyType"
                  defaultValue="builder-floor"
                  data-label="Builder Floor"
				  onChange={handleCheckboxChange}
                />
                <span>Builder Floor</span>
              </label>
              <label htmlFor="propertyType2-mod-multiSelectOptions-2">
                <input
                  id="propertyType2-mod-multiSelectOptions-2"
                  type="checkbox"
                  data-type="multiple-select-option"
                  data-value="villa"
                  data-name="propertyType"
                  name="propertyType"
                  defaultValue="villa"
                  data-label="Villa"
				  onChange={handleCheckboxChange}
                />
                <span>Villa</span>
              </label>
              <label htmlFor="propertyType3-mod-multiSelectOptions-2">
                <input
                  id="propertyType3-mod-multiSelectOptions-2"
                  type="checkbox"
                  data-type="multiple-select-option"
                  data-value="residential-plot"
                  data-name="propertyType"
                  name="propertyType"
                  defaultValue="residential-plot"
                  data-label="Residential Plot"
				  onChange={handleCheckboxChange}
                />
                <span>Residential Plot</span>
              </label>
              <label htmlFor="propertyType4-mod-multiSelectOptions-2">
                <input
                  id="propertyType4-mod-multiSelectOptions-2"
                  type="checkbox"
                  data-type="multiple-select-option"
                  data-value="independent-house"
                  data-name="propertyType"
                  name="propertyType"
                  defaultValue="independent-house"
                  data-label="Independent House"
				  onChange={handleCheckboxChange}
                />
                <span>Independent House</span>
              </label>
              <label htmlFor="propertyType5-mod-multiSelectOptions-2">
                <input
                  id="propertyType5-mod-multiSelectOptions-2"
                  type="checkbox"
                  data-type="multiple-select-option"
                  data-value="studio-apartment"
                  data-name="propertyType"
                  name="propertyType"
                  defaultValue="studio-apartment"
                  data-label="Studio Apartment"
				  onChange={handleCheckboxChange}
                />
                <span>Studio Apartment</span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
        </div>
      </div>
      <input type="button" className="apply-filter" onClick={handleFilterSubmission} value="Apply Filters"/>

<Routes>
  <Route path='/PropertiesFilter' element={<PropertiesFilter/>}/>
</Routes>
    </div>
  );
};

export default SearchComponent;
