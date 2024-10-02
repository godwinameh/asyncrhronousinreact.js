import React, { useState } from 'react';
import './LoginPage.css';
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { IoCloseCircleOutline } from "react-icons/io5";

const LoginPage = () => {
  const [email, setEmail] = useState('');

  const handleEmailChange = (e) => setEmail(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Email:', email);
  };

  return (
    <div className="login-container">
      <button className="close-btn">Close <IoCloseCircleOutline /></button>
      <br /><br /><br />
      <div className="text_wrap">
        <div className="login-header">
          <h3>Create an account </h3>
          <p>with RealHubAfrica.</p>
        </div>
        <div className="account-info">
          <p>Already have an account? </p>
          <a href="#">Log in</a>
        </div>
      </div>
     
      <div className="social-login">
        <button className="facebook-btn">
          <FaFacebook className='icon' /> Continue With Facebook
        </button>
        <button className="google-btn">
          <FaGoogle className='icon' /> Continue With Google
        </button>
      </div>

      <form onSubmit={handleSubmit} className="login-form">
        <label htmlFor="email">EMAIL ADDRESS</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={handleEmailChange}
          placeholder="onogwu@gmail.com"
          required
        />
        <button type="submit" className="login-btn">Submit and continue</button>

        <div className="checkbox-container">
          <input type="checkbox" id="checkbox" />
          <label htmlFor="checkbox">Allow RealHubAfrica to send you marketing emails.</label>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
