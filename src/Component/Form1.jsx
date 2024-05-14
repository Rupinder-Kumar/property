// Form1.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Form1() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'username') {
      setUsername(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPassword('');
    setUsername('');
    navigate('/Form2');
  };

  return (
    <>
      <form className="regform">
        <h3>Fill the form</h3>
        <label>Username:</label>
        <input type="text" name="username" placeholder="Username" value={username} onChange={handleChange} /><br></br>

        <label>Password:</label>
        <input type="password" name="password" placeholder="Password" value={password} onChange={handleChange} /><br></br>

        <button className="btn btn-primary" onClick={handleSubmit}>Submit</button>
      </form>
    </>
  );
}
