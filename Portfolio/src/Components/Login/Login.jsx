import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

function Login() {
  return (
    <div className="loginContainer">
      <div className="titleContainer">
        <div>LogIn</div>
      </div>
      <br />
      <div className="inputContainer">
        <input
          // value={email}
          placeholder="Enter your email here"
          // onChange={(ev) => setEmail(ev.target.value)}
          className="inputBox"
        />
        {/* <label className="errorLabel">{emailError}</label> */}
      </div>
      <br />
      <div className="inputContainer">
        <input
          // value={password}
          placeholder="Enter your password here"
          // onChange={(ev) => setPassword(ev.target.value)}
          className="inputBox"
        />
        {/* <label className="errorLabel">{passwordError}</label> */}
      </div>
      <br />
      <div className="goSignup">
        <p className="goSignupPara">Don't have an account?</p>
        <Link to={"/register"} className="goSignupLink">
          Sign up here
        </Link>
      </div>
      <br />
      <div className="inputContainer">
        <input
          className="submitButton"
          type="button"
          // onClick={onButtonClick}
          value="Log in"
        />
      </div>
    </div>
  );
}

export default Login;
