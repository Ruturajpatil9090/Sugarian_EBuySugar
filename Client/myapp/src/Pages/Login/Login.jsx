import React, { useState } from 'react';
import axios from 'axios';
import { AiOutlineUser, AiOutlineLock } from 'react-icons/ai'; // Import icons from React Icons
import './Login.css'; 
import { useNavigate } from 'react-router-dom';
import logo from "../../Assets/companylogo.jpg"

const LoginForm = () => {
  const navigate = useNavigate()
  const [loginData, setLoginData] = useState({
    Login_Name: '',
    Password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/api/login', loginData);
      const { user_data, access_token } = response.data;
      navigate("/company-list")
      sessionStorage.setItem('user_type', user_data.UserType); 
      sessionStorage.setItem('access_token', access_token);
    } catch (error) {
      console.error('Login error:', error.response.data.error);
    }
  };

  return (
    <div className="login-container">
      <img src={logo} alt='' />
      <h1>AccoWeb Login</h1>
      <form onSubmit={handleSubmit} className="login-form">
        <div className="form-group">
        <AiOutlineUser className="icon"  size={30} /> 
          <label htmlFor="loginName" className="form-label">
           
            Username
          </label>
          <input
            type="text"
            className="form-control"
            id="loginName"
            name="Login_Name"
            value={loginData.Login_Name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
        <AiOutlineLock className="icon"  size={30} /> 
          <label htmlFor="password" className="form-label">
            
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="Password"
            value={loginData.Password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
      <div className="developed-by">
        Developed by | <a href="https://latasoftware.co.in/" target="_blank" rel="noopener noreferrer"><strong>Lata Software Consultancy</strong></a>
      </div>
    </div>
  );
};

export default LoginForm;
