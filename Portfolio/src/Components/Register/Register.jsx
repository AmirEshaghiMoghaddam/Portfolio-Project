import React from "react";
import { Link } from "react-router-dom";
import "./Register.css";

function Register() {
  const [name, namechange] = useState("");
  const [email, emailchange] = useState("");

  return (
    <div className="signupContainer">
      <div className="titleContainer">
        <div>SignUp</div>
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
      <div className="inputContainer">
        <input
          // value={password}
          placeholder="Repeat your password"
          onChange={(ev) => setPassword(ev.target.value)}
          className="inputBox"
        />
        {/* <label className="errorLabel">{passwordError}</label> */}
      </div>
      <br />
      <div className="goLogin">
        <p className="goLoginPara">Already have an account?</p>
        <Link to={"/login"} className="goLoginLink">
          Log in here
        </Link>
      </div>
      <br />
      <div className="inputContainer">
        <input
          className="submitButton"
          type="button"
          // onClick={onButtonClick}
          value="Submit"
        />
      </div>
    </div>
  );
}

export default Register;
