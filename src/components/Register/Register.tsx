import React from 'react';
import './Register.scss';

const Register: React.FC = () => {
  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>Register</h2>
        <form>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" required />
          </div>
          <div className="auth-actions">
            <button type="submit">Register</button>
            <a href="/login">Login</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
