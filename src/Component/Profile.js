import React, { useState, useEffect } from 'react';
import VendorLayout from './VendorLayout';
import './profile.css';

export default function Profile() {
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



  return (
    <>
      <VendorLayout /> 
      <div className="profile-data">
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
      <a href="#" className="links link-3">
        <div className="right-content">
          <p>Referral link</p>
          <p className="link-copy">{`http://localhost:3000/Loginpanel?refer=${profileData.referralCode}`}</p>
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
