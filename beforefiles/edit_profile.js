import React from 'react'
import './editprofile.css'
import PropTypes from 'prop-types'
import { useState } from 'react';

export default function Editprofile(props)
 {

  const [formData, setFormData] = useState({
    username: 'YourUsername',
    email: 'youremail@example.com',
    password: '',
    confirmPassword: '',
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // You can add code here to handle form submission, e.g., making an API request.

    // Example: Logging the form data
    console.log(formData);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="container">
      <h1>Edit Your Profile</h1>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleInputChange}
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
        />

        <label htmlFor="confirmPassword">Confirm Password:</label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleInputChange}
        />

        <input type="submit" value="Update Profile" />
      </form>
    </div>
  );
}

        





