import React from 'react';
import Service  from "./Service"
import List  from "./List";
import logo from './site_logo-site.jpg';
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";


import {BrowserRouter as Router, Routes,Route,Link} from "react-router-dom";
import FullWidthSlider from './FullWidthSlider';
const App= () => {
	
	
	const [name, setName] = useState('Customer Login');
	const navigate = useNavigate();
	useEffect(()=>{
	const storedValue = sessionStorage.getItem('phoneNumber');
	const userType = sessionStorage.getItem('userType');
	const username = sessionStorage.getItem('username');
	console.log('Stored value:', userType);
	
if (username) {
    setName(username);
} else {
   setName('Customer Login');
}
		},[])
	const logout = () => {
  sessionStorage.clear();
  navigate('/Loginpanel');
};

  return (
  <>
  <div className="header">
  <div className="row-header">
    <div className="row-col-logo">
      <div className="logo-inner">
         <img src={logo} alt="Site Logo" />
      </div>
    </div>
    <div className="row-col-menu">
      <ul>
        <li className="loan-app">
          <img
            src="https://static.makaan.com/images/personalLoansHooks/Personal_Loan_Desktop_Home_Nav.22990e95.png?width=96&height=20"
            alt="Loan App"
          />
        </li>
        <li className="download-s-app">
          <span
            data-url="/download-mobileapp"
            data-link-type="Other"
            data-link-name="download app"
            data-type="download-app"
            title=""
            className="d-show span-link"
          >
            <span className="app-img" />
            <span className="txt"> Download app</span>
          </span>
        </li>
        <li className="sellersitelink">
          <a
            href="https://seller.makaan.com/postProperty"
            data-link-type="Other"
            data-link-name="list your property"
            data-type="track-sell-your-property"
            target="_blank"
          >
            <span className="list-icon" />
            <span className="txt">
              Sell/Rent Property<sup> Free</sup>
            </span>
          </a>
        </li>
	
        <li className="login">
			 <Link to="/Loginpanel">{name}</Link>
              </li>
			  
		{name !== 'Customer Login' && (
  <li className="log-out" onClick={logout}>
    <span>Logout</span>
  </li>
)}
      </ul>
    </div>
  </div>
</div>

  
  
  <FullWidthSlider />
	<div  style={{marginTop:"0px",postion:"relative"}}>
	

	<Service />
	
	</div>
	</>
  );
};

export default App;




