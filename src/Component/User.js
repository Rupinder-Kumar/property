import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './form.css';
import './form.js';
import Axios  from "axios";
import { useNavigate } from "react-router-dom";

const UserSignUpForm = () => {
		const navigate = useNavigate();
    const [showSuccess, setSuccess] = useState(false);
  const [otp, setOtp] = useState('');
  const [mobile, setMobile] = useState(0);
  const [password, setPassword] = useState("");
   const [isOtpInserted, setIsOtpInserted] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    phone_number: '',
    referralCode: ''
  });
  
  /* ============================================ */
    const OtphandleSubmit = (e) => {
		e.preventDefault();
    const mobileNumber = document.getElementById("lg-input").value;
	console.log(mobileNumber)
    Axios.post("http://localhost:4300/sendotp", {
      phoneNumber: mobileNumber,
    }).then((response) => {
      console.log(response);
      console.log(response.data.success);
      if (response.data.success === true) {
        sessionStorage.setItem('phoneNumber', mobileNumber);
        setOtp(response.data.otp1.toString());
		setIsOtpInserted(true);
      } else {
        console.log('error')
      }
    });
  };
  
  
    const Loginprocess = (e) => {
    e.preventDefault();
		
    const login_number = document.getElementById("lg-input").value;
	const login_password = document.getElementById("login_password").value;
    Axios.post("http://localhost:4300/login", {
        login_number: login_number,
		login_password:login_password,
    }).then((response) => {
        if (response.data.success === true) {
				console.log(response.data.loginCustomer[0].username)
			const userType = response.data.loginCustomer[0].type;
			const username = response.data.loginCustomer[0].username;
			sessionStorage.setItem('phoneNumber', login_number);
			if((userType == 'admin') || (userType == 'vendor')){
				alert('Admin and vendor are not allow to login here')
				navigate("/login");
			}else{
					console.log(response.data.loginCustomer[0].username)
			const userType = response.data.loginCustomer[0].type;
			const username = response.data.loginCustomer[0].username;
			sessionStorage.setItem('phoneNumber', login_number);
			sessionStorage.setItem('userType', userType);
			sessionStorage.setItem('username', username);
			navigate("/frontenduser");
			}
		
		}
		else{
		}
       
    });
}



  /* ============================================ */

  const updateReferralCodeFromQuery = () => {
    const queryParams = new URLSearchParams(window.location.search);
    const referralCode = queryParams.get('refer');
    if (referralCode) {
      setFormData({ ...formData, referralCode });
    }
  };

  useEffect(() => {
    updateReferralCodeFromQuery();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:4300/Referral_signup', formData);
      console.log(response.data.message);
      setSuccess(true);
    } catch (error) {
      console.error('Registration failed:', error.response.data);
    }
  };
return (
    <>
      <div className="container-form-setup">
        <div className="wrapper-form">
          <div className="title-text">
            <div className="title login">Login Form</div>
            <div className="title signup">Signup Form</div>
          </div>
          <div className="form-container">
            <div className="slide-controls">
              <input type="radio" name="slide" id="login" defaultChecked="" />
              <input type="radio" name="slide" id="signup" />
              <label htmlFor="login" className="slide login">
                Login
              </label>
              <label htmlFor="signup" className="slide signup">
                Signup
              </label>
              <div className="slider-tab" />
            </div>
            <div className="form-inner">
              <form action="#" className="login" >
                <div className="field">
                  <input type="tel" name="phonenumber" id="lg-input" className="phonenumber" placeholder="Phone Number" required="" />
                </div>
                <div className="field">
                  <input type="text" name="OTP" value={otp} onChange={handleChange} placeholder="OTP" />
                </div>
				{isOtpInserted ? (
  <div className="field">
    <input type="password" name="password" id="login_password" value={password} onChange={e => setPassword(e.target.value)} placeholder="password" />
  </div>
) : null}
				
				
				
                <div className="pass-link">
                  <a href="#">Forgot password?</a>
                </div>
                <div className="field btn">
          {isOtpInserted ? (
            <button className="button--submit button-password"  onClick={Loginprocess} type="submit">Login</button>
          ) : (
            <button className="button--submit button-otp" onClick={OtphandleSubmit} type="submit">Login</button>
          )}
        </div>
				
				
                <div className="signup-link">
                  Not a member? <a href="">Signup now</a>
                </div>
              </form>
              <form onSubmit={handleSubmit} className="signup">
                <h3 className="signup-heading">Signup Form (USER)</h3>
                <div className='field'>
                  <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={formData.username}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className='field'>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className='field'>
                  <input
                    type="tel"
                    name="phone_number"
                    placeholder="Phone Number"
                    value={formData.phone_number}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className='field'>
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className='field'>
                  <input
                    type="text"
                    name="referralCode"
                    placeholder="Referral Code [Optional]"
                    value={formData.referralCode}
                    onChange={handleChange}
                  />
                </div>
                {showSuccess && (
                  <div className="text-danger mt-2">
                    User added successfully
                  </div>
                )}
                <div className='field'>
                  <button className="button-submit" type="submit">Sign Up</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserSignUpForm;
