import React from 'react';
import '../Login/Account.css';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div className="register-container">
      <h2>Register</h2>
      <div className="form-group">
        <label htmlFor="username">Username</label>
        <input type="text" id="username" />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input type="password" id="password" />
      </div>
      <Link to='/login'>
        <button className="register-btn">Register</button>
      </Link>
    </div>
  );
};

export default Register;
