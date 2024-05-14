import React, { useState, useEffect } from 'react';
import Layout from './Layout';
import './profile.css';
import Service  from "../Service"
import List  from "../List";
import logo from '../site_logo-site.jpg';
import {BrowserRouter as Router, Routes,Route,Link} from "react-router-dom";
import FullWidthSlider from '../FullWidthSlider';
import { useNavigate } from "react-router-dom";

export default function Frontenduser() {
	const [profileData, setProfileData] = useState(null);
	    const [referralUsers, setReferralUsers] = useState([]);
	const phoneNumber = sessionStorage.getItem('phoneNumber');
	console.log(phoneNumber);
  useEffect(() => {
    async function fetchProfileData() {
      try {
		 
		  const profile_id = phoneNumber;
        const response = await fetch(`http://localhost:4300/profile/${profile_id}`); 
        const data = await response.json();
		const profile_data = data.data;
        setProfileData(profile_data);
		const datareferralCode = profile_data.referralCode;
                const referralResponse = await fetch(`http://localhost:4300/referralUsers/${datareferralCode}`);
                const referralData = await referralResponse.json();
				console.log(referralData.data)
                setReferralUsers(referralData.data);
      } catch (error) {
        console.error('Error fetching profile data:', error);
      }
    }

    fetchProfileData();
  }, []);

    const copyToClipboard = () => {
        const referralLink = document.querySelector('.link-copy').textContent;
        navigator.clipboard.writeText(referralLink)
            .then(() => {
                alert('Copied to clipboard!');
            })
            .catch((error) => {
                console.error('Error copying to clipboard:', error);
            });
    };
	
	const [name, setName] = useState('Login');
	const navigate = useNavigate();
	useEffect(()=>{
	const storedValue = sessionStorage.getItem('phoneNumber');
	const userType = sessionStorage.getItem('userType');
	const username = sessionStorage.getItem('username');
	console.log('Stored value:', userType);
	setName(username);
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
	  <Link to="/">
         <img src={logo} alt="Site Logo" />
      </Link>
        
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

  
  

      <div className="profile--data">
        <div className="container-data">
          
          {profileData && (
            <>
			
              <div className="profile-container">
  <div className="person-box">
    <div className="person-box--left">
      <div className="person-img">
        <img
          src="https://i.ibb.co/tp1vQ8T/man-person-icon.png"
          alt="Jessica Potter"
        />
      </div>
      <div className="person-name">
      <table className="table-profile">
	  <tbody>
        <tr>
          <td>Username</td><td>{profileData.username}</td>
		  </tr>
		  <tr>
          <td>Phone Number</td><td>{profileData.phone_number}</td>
		  </tr>
		  <tr>
          <td>Email</td><td>{profileData.email}</td>
		  </tr>
		  <tr>
          <td>Type</td><td>{profileData.type}</td>
        </tr>
      </tbody>
    </table>
		
      </div>
      <div className="links">
        <ul>
          <li>
            <a href="https://codepen.io/batuhangulgor" target="_blank">
              Follow
            </a>
          </li>
          <li>
            <a href="mailto:gulgor.batu@gmail.com">Message</a>
          </li>
        </ul>
      </div>
    </div>
    <div className="person-box--right">
	
      <a href="#" className="links link-1">
        <div className="right-content">
          <p>₹{profileData.Userpoint}</p>
          <p>Rupees</p>
        </div>
      </a>
      <a href="#" className="links link-2">
        <div className="right-content">
          <p>{profileData.referralPoint}</p>
          <p>Cashback incentive</p>
        </div>
      </a>
	   <a href="#" className="links link-2">
        <div className="right-content">
          <p>{profileData.referralCode}</p>
          <p>Referral Code</p>
        </div>
      </a>
      <a href="#" className="links link-3" onClick={copyToClipboard}>
        <div className="right-content">
          <p>Referral link</p>
          <p className="link-copy">{`http://localhost:3000/Loginpanel?refer=${profileData.referralCode}`}</p>
		  <span className="copycode" >Copy</span>
        </div>
      </a>
    </div>
  </div>
</div>
				<div className="referral-users">
                    <h2>Sub wallet (only 20,000) </h2>
					<ul className="associated_users">
					 {referralUsers.map(user => (
						<li>
						<p className="user-nfo">
						<span>Name : {user.username}</span>
						<span>Referral Code : {user.referralCode}</span>
						</p>
						</li>
                        ))}
					</ul>
                </div>

            </>
          )}
        </div>
      </div>
    </>
  );
}
