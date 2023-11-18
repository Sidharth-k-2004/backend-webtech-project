import React from 'react';
import { Link } from 'react-router-dom';
import './Signup.css';

function SignUpPage() {
  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <form action="process_signup.php" method="POST">
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required />
        </div>
        <div className="form-group">
          <button type="submit">Sign Up</button>
        </div>
      </form>
      <div className="signup-link">
        <p>
          Already have an account? <Link to="/">Log In</Link>
        </p>
      </div>
    </div>
  );
}


export default SignUpPage