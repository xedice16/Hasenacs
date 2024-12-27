
import React from 'react';
import '../Login/Account.css';
import { Link, useNavigate } from 'react-router-dom'
const Login = () => {
  const router = useNavigate()
  const handleLogin = () => {
    console.log('login successfully');
    router('/', {replace: true})
  }
  return (
    <div className="login-container">
      <h2>Login</h2>
      <div className="form-group">
        <label htmlFor="username">Username</label>
        <input type="text" id="username" />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input type="password" id="password" />
      </div>
      <button onClick={handleLogin} className="login-btn">Login</button>
    </div>
  );
};

export default Login;
