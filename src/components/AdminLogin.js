import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import loginImage from '../images/login-image.png';

import '../App.css'; 
import './AdminLogin.css';
const AdminLogin = () => {
  const navigate = useNavigate(); // Hook to navigate programmatically

  const [form, setForm] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Replace with actual authentication logic
    if (form.username === 'ngo1' && form.password === '123') {
      navigate('/dashboard'); // Redirect to dashboard if login is successful
    } else {
      alert('Invalid credentials. Please try again.'); // Replace with appropriate error handling
    }
  };

  return (
    <div className="login-page">
      <div className="auth-container">
        <div className="welcome-container">
          <h2>Welcome back to Nistara</h2>
          <p className="tagline">Empowering Communities, Saving Lives</p>
        </div>
        <div className="form-container">
          <form onSubmit={handleSubmit} className="login-form">
            <label htmlFor="username">Username:</label>
            <input type="text" name="username" value={form.username} onChange={handleChange} required />
            
            <label htmlFor="password">Password:</label>
            <input type="password" name="password" value={form.password} onChange={handleChange} required />
            
            <button type="submit">Login</button>
          </form>
          <div className="auth-links">
            <p>Don't have an account? <Link to="/signup">Signup</Link></p>
          </div>
        </div>
      </div>
      <img src={loginImage} alt="Login" className="login-image" />
    </div>
  );
};

export default AdminLogin;
