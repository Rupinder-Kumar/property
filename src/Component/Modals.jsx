import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import OtpInput from "react-otp-input";
import { InputGroup } from "react-bootstrap";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";

import './modal.css';
import logo from './popup_logo.jpg';
import Axios  from "axios";


const Modals = () => {
	const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [modal, setModal] = useState("login-mobile");
    const [mobile, setMobile] = useState(0);
    const [email, setEmail] = useState("");
    const [otp, setOtp] = useState(0);
    const [password, setPassword] = useState("");
	const [userMobile, setUserMobile] = useState("");
	
const [phoneNumberError, setPhoneNumberError] = useState(false);
const [passwordError, setpasswordError] = useState(false);
    const handleLogin = (e) => {
    e.preventDefault();
    const mobileNumber = document.getElementById("lg-input").value;
    const value = e.target.value.toString();
    Axios.post("http://localhost:4300/sendotp", {
        phoneNumber: mobileNumber,
    }).then((response) => {
        console.log(response);
        console.log(response.data.success);
        if (response.data.success === true) {
			 sessionStorage.setItem('phoneNumber', mobileNumber);

            setOtp(response.data.otp1);
			console.log(value)
            if (value === "verify-otp" || value === "verify-passsword") {
                setModal(value);
				setUserMobile(mobileNumber);
            } else {
                setModal("login-mobile");
            }
        } else {
            setPhoneNumberError(true);
        }
    });
}

  const Loginprocess = (e) => {
    e.preventDefault();
		
    const login_number = document.getElementById("login_number").value;
	const login_password = document.getElementById("login_password").value;
    Axios.post("http://localhost:4300/login", {
        login_number: login_number,
		login_password:login_password,
    }).then((response) => {
        if (response.data.success === true) {
			setpasswordError(false);
			setModal(false);
			const userType = response.data.loginCustomer[0].type;
			const username = response.data.loginCustomer[0].username;
			sessionStorage.setItem('phoneNumber', login_number);
			sessionStorage.setItem('userType', userType);
			sessionStorage.setItem('username', username);
			console.log('User type is :' + username);
			if (userType === "admin") {
			navigate("/dashboard");
			} else if (userType === "vendor") {
			navigate("/VDashboard");
			}
			else if (userType === "user") {
			navigate("/frontenduser");
			}
		}
		else{
			setpasswordError(true);
		}
       
    });
}




	
const verifyLogin = (e) => {
		 Axios.post("http://localhost:4300/verifyotp", {
      phoneNumber: mobile,
	  chkotp:otp
     
    }).then((response) => {
		console.log(response.data)
	  
    });
	return setModal("verify-password")	
		
}
    return (
        <div className="modal show" style={{ display: 'block', position: 'initial' }}>
            {/*Login with mobile*/}
            <Modal onHide={() => setModal("")} backdrop="static" keyboard={false} show={modal === "login-mobile"}>
                <Modal.Header className="border-0 flex-column px-4 pt-4 align-items-start center-title">
                    <button type="button" className="btn-close" aria-label="Close"></button>
					<div className="svg-icon">
					<img src={logo} alt="Logo" />
					</div>
                    <Modal.Title className="fs-2">Login / Register</Modal.Title>
                    <small muted>Please enter you phone number</small>
                </Modal.Header>
                <Modal.Body className="fs-5 px-5 mt-6 mb-1">
                    <Form>
                        <Form.Control
                            id="lg-input"
                            maxLength="10"
                            className="login-input"
                            placeholder="Enter you mobile number"
                            onChange={(e) => setMobile(parseInt(e.target.value))}
                            onFocus={e => e.target.style.borderColor = "rgb(13, 110, 253)"}
                            onBlur={e => e.target.style.borderColor = "black"}
                        />
							 {phoneNumberError && (
                            <div className="text-danger mt-2">
                                Phone number not found in the database. Please check your number.
                            </div>
                        )}
                        <Button
                            className="primary w-100 mt-5"
                            value="verify-otp"
                            onClick={e => handleLogin(e)}
                            disabled={mobile.toString().length !== 10}>
                            Continue
                        </Button>
                        <small className="d-flex fs-5 mb-1 center-block" muted>or</small>
                        <Button
                            className="bg-light text-secondary btn-dark w-100"
                            value="login-email"
                            onClick={(e) => setModal(e.target.value)} muted>
                            Continue with Email/Username
                        </Button>
                        <Form.Text style={{ fontSize: "0.75rem" }} muted>By Clicking you agree to <a href="#">Terms & Condtition.</a></Form.Text>
                    </Form>
                </Modal.Body>
            </Modal >

            {/* Login with Email */}
            <Modal onHide={() => setModal("")} backdrop="static" keyboard={false} show={modal === "login-email"}>
                <Modal.Header className="border-0 flex-column px-4 align-items-start" >
                    <button type="button" className="btn-close" aria-label="Close"></button>
                    <Modal.Title className="fs-2">Login / Register</Modal.Title>
                    <small muted>Please enter your Email ID/Username</small>
                </Modal.Header>
                <Modal.Body className="px-5">
                    <Form>
                        <Form.Control
                            type="email"
                            className="login-input"
                            placeholder="enter your email"
                            onChange={e => setEmail(e.target.value)}
                            onFocus={e => e.target.style.borderColor = "rgb(13, 110, 253)"}
                            onBlur={e => e.target.style.borderColor = "black"}
                        />
                        <Button
                            className="primary w-100 mt-5"
                            value="verify-password"
                            onClick={e => handleLogin(e)}
                            disabled={email === ""}
                        >Continue</Button>
                        <Form.Text style={{ fontSize: "0.75rem" }} muted>By Clicking you agree to <a href="#">Terms & Condtition.</a></Form.Text>
                    </Form>
                </Modal.Body>
            </Modal>

            {/* OTP verify modal */}
            <Modal onHide={() => setModal("")} backdrop="static" keyboard={false} show={modal === "verify-otp"}>
                <Modal.Header className="border-0 flex-column px-4 pt-4 align-items-start">
                    <button type="button" className="btn-close" aria-label="Close"></button>
                    <Modal.Title className="fs-2">Verify your number<br /><small className="fs-5">+91 - {mobile}</small><br/>
					<small className="fs-5">OTP - {otp}</small>
					
					</Modal.Title>
                </Modal.Header>
                <Modal.Body className="px-5">
                    <Form>
                        <Form.Label>Enter your 4 digit OTP</Form.Label>
                        <OtpInput
                            value={otp}
                            onChange={setOtp}
                            numInputs={4}
                            inputStyle={{ border: "1px solid grey", borderRadius: "0.25rem", width: "2rem", aspectRatio: "3.75/4" }}
                            containerStyle={{ gap: ".75rem", marginTop: ".5rem" }}
                            renderSeparator={<span>&nbsp;&nbsp;</span>}
                            renderInput={(props) => <input {...props} />}
                        />
                        <Form.Text style={{ fontSize: "0.75rem" }} muted>Haven't received yet? <a href="#">Resend OTP</a></Form.Text>
                        <Button
                            className="primary w-100 mt-5 mb-2"
                            onClick={() => verifyLogin(otp)}
                            disabled={otp.length !== 4}>
                            Verify & Continue
                        </Button>
                        <Button
                            className="bg-light text-primary border-primary btn-dark w-100"
                            value="login-email"
                            onClick={() => console.log("missed call")}>
                            Or, verify via Missed Call
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>

            {/* password modal */}
            <Modal onHide={() => setModal("")} backdrop="static" keyboard={false} show={modal === "verify-password"}>
                <Modal.Header className="border-0 flex-column px-4 pt-4 align-items-start">
                    <button type="button" className="btn-close" aria-label="Close"></button>
                    <Modal.Title className="fs-2">Enter Password</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
					<InputGroup className="mt-3" style={{ height: "3.6rem" }}>
    <Form.Control
        type="text"
		id="login_number"
        className="login-input"
        placeholder="enter your mobile number"
        value={userMobile}
        disabled
    />
</InputGroup>
                        <Form.Text>Enter password for <a href="#">{email}</a></Form.Text>
                        <InputGroup className="mt-3" style={{height:"3.6rem"}}>
                            <Form.Control
                                type={showPassword ? "text" : "password"}
                                className="login-input"
								id="login_password"
                                placeholder="enter your password"
                                onChange={e => setPassword(e.target.value)}
                                onFocus={e => e.target.style.borderColor = "rgb(13, 110, 253)"}
                                onBlur={e => e.target.style.borderColor = "black"}
                            />
                            <Button className="h-100 py-3" onClick={()=>setShowPassword(!showPassword)}>
                                {showPassword ? <FaEye/>:<FaEyeSlash/>}
                            </Button >
                        </InputGroup>
                        <Form.Text ><a href="#">Forgot password?</a></Form.Text>
							
							 {passwordError && (
                            <div className="text-danger mt-2">
                                Password not matched
                            </div>
                        )}
                        <Button
                            className="primary w-100 mt-5"
                            disabled={password.length === 0}
							onClick={e => Loginprocess(e)}
                            >
                            Continue
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </div>
    )
}
export default Modals;