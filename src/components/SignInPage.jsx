import React, { useState } from 'react';
import './SignInPage.css';

const SignInPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle sign in logic here
  };

  return (
    <div className="sign-in-page">
    <div className="sign-in-container">
      <h1>Sign in</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <a href="#" className="forgot-password">Forgot password?</a>
        <button type="submit" className="sign-in-button">Sign in</button>
      </form>
      <div className="divider">
        <span>or</span>
      </div>
      <button className="social-button google">Sign in with Google</button>
      <button className="social-button apple">Sign in with Apple</button>
      <p className="sign-up-prompt">
        Don't have an account? <a href="#">Sign up</a>
      </p>
    </div>
    </div>
  );
};

export default SignInPage;