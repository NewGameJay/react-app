import React from "react";
import AiFillEye from "./icons/AiFillEye"; // Adjust the path as necessary
import { ChevronRight } from "./icons/ChevronRight"; // Adjust the path as necessary
import "./SignInPage.css";

const SignInPage = () => {
  return (
    <div className="sign-in-page">
      <div className="sign-in-container">
        <h1>Sign In</h1>
        <form className="sign-in-form">
          <div className="input-group">
            <input type="email" placeholder="Email" required />
            <AiFillEye className="eye-icon" />
          </div>
          <div className="input-group">
            <input type="password" placeholder="Password" required />
            <AiFillEye className="eye-icon" />
          </div>
          <button type="submit" className="sign-in-button">Sign In</button>
          <button className="forgot-password">Forgot password?</button>
        </form>
        <div className="social-buttons">
          <button className="social-button google">Sign in with Google</button>
          <button className="social-button apple">Sign in with Apple</button>
        </div>
        <p className="sign-up-prompt">
          Don't have an account? <button className="sign-up-link">Sign up</button>
        </p>
      </div>
    </div>
  );
};

export default SignInPage;