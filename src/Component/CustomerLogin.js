import React, { useState } from 'react';
import './customerlogin.css';
import './login.js';
const CustomerLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <h2 className="login-title">Customer Login</h2>
	  <div className="container new-login-area">
  <div id="sign-in" className="login-setup-section active">
    <h3 className="request-otp-header">Login with your mobile number</h3>
    <div className="form-group login-label">
      <label htmlFor="inputnumber">mobile number</label>
      <input
        type="number"
        className="form-control input-edit"
        placeholder="Enter mobile number"
        id="number"
      />
    </div>
    <button
      type="button"
      className="btn btn-default btn-lg btn-block request-otp"
      id="request-otp"
    >
      Get OTP
    </button>
  </div>
  <div id="verify-otp" className="login-setup-section">
    <i className="fa fa-chevron-left" aria-hidden="true" />
    <h3 className="request-otp-header">Verify OTP</h3>
    <div className="form-group login-label">
      <label htmlFor="inputnumber">One Time Password</label>
      <input
        type="number"
        className="form-control input-edit"
        placeholder="Enter OTP"
        id="number"
      />
      <label className="pull-right resend-otp">Resend otp</label>
    </div>
    <button
      type="button"
      className="btn btn-default btn-lg btn-block request-otp "
    >
      Verify
    </button>
  </div>
</div>

	  
	  
	  
	  
	  
	  
    </div>
  );
};

export default CustomerLogin;
