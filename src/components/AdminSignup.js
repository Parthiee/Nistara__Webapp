import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import signupImage from '../images/signup-image.png';
import './AdminSignup.css';
const AdminSignup = () => {
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: '',
    userType: 'NGO', // Default userType to NGO
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle signup logic here
  };

  return (
    <div className="auth-container signup-container">
      <div className="form-container">
        <h2 style={{ textAlign: 'center',color: '#272665' }}>Join Nistara</h2>
        <p style={{ textAlign: 'center', color: '#495057' }}>Empowering Communities, Saving Lives</p>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Username:</label>
          <input type="text" name="username" value={form.username} onChange={handleChange} required />
          
          <label htmlFor="email">Email:</label>
          <input type="email" name="email" value={form.email} onChange={handleChange} required />
          
          <label htmlFor="password">Password:</label>
          <input type="password" name="password" value={form.password} onChange={handleChange} required />
          
          <label htmlFor="userType">User Type:</label>
          <select name="userType" value={form.userType} onChange={handleChange}>
            <option value="NGO">NGO</option>
            <option value="Computational Crowd Sourcing">Computational Crowd Sourcing</option>
          </select>
          
          <button type="submit" style={{ backgroundColor: '#343a40', color: '#fff' }}>Signup</button>
        </form>
        <div className="auth-links">
          <p style={{ color: '#495057' }}>Already have an account? <Link to="/login" style={{ color: '#ab9ee2' }}>Login</Link></p>
        </div>
      </div>
      <img src={signupImage} alt="Signup" className="signup-image" />
    </div>
  );
};

export default AdminSignup;
