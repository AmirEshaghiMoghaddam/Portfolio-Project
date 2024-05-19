import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Register.css";
import toast from "react-hot-toast";

function Register() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const [errorUserName, setErrorUserName] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [errorRepeatPassword, setErrorRepeatPassword] = useState("");

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    setErrorUserName();
    setErrorEmail();
    setErrorPassword();
    setErrorRepeatPassword();
    // console.log("submitetd");
    // console.log(e.target);
    let formObj = { userName, email, password };
    // console.log(formObj);
    if (IsValidate()) {
      fetch("http://localhost:8000/user", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(formObj),
      })
        .then((res) =>
          res.json().then((data) => {
            toast.success("Registered successfully.");
            navigate("/login");
            // console.log(data);
          })
        )
        .catch((err) => {
          toast.error("Failed :" + err.message);
        });
    }
  }

  const IsValidate = () => {
    let isproceed = true;
    let emptyErrorMessage = "Please enter the ";
    let inequalityErrorMessage = "The passwords are not match.";
    if (userName === null || userName === "") {
      isproceed = false;
      emptyErrorMessage += " username";
      setErrorUserName("please enter the username.");
    } else if (!/^[A-Za-z][A-Za-z0-9_'\s?]{2,30}$/.test(userName)) {
      isproceed = false;
      setErrorUserName("username must be between 3 to 30 letters.");
    } else if (email === null || email === "") {
      isproceed = false;
      emptyErrorMessage += " email";
      setErrorEmail("please enter the email.");
    } else if (!/^[a-zA-Z0-9.]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)) {
      isproceed = false;
      setErrorEmail("please enter valid email");
    } else if (password === null || password === "") {
      isproceed = false;
      emptyErrorMessage += " password";
      setErrorPassword("please enter the password.");
    } else if (
      !/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/.test(
        password
      )
    ) {
      isproceed = false;
      setErrorPassword(
        "password must be between 8 to 16 characters, include at least 1 uppercase, lowercase and 1 special character."
      );
    } else if (password !== repeatPassword) {
      isproceed = false;
      toast.error(inequalityErrorMessage);
      setErrorRepeatPassword("both passwords must be exaxctly equal.");
    }
    return isproceed;
  };

  return (
    <>
      <form className="signupContainer" onSubmit={handleSubmit}>
        <div className="titleContainer">
          <div>SignUp</div>
        </div>
        {/* <br /> */}
        <div className="inputContainer">
          <input
            value={userName}
            autoComplete="name"
            placeholder="Enter your username here"
            onChange={(e) => setUserName(e.target.value)}
            className="inputBox"
          />
          <div
            style={
              errorUserName
                ? { visibility: "visible" }
                : { visibility: "hidden" }
            }
            className="errorLabel"
          >
            {errorUserName || "this is a gapfiller error"}
          </div>
        </div>

        <div className="inputContainer">
          <input
            value={email}
            autoComplete="email"
            placeholder="Enter your email here"
            onChange={(e) => setEmail(e.target.value)}
            className="inputBox"
          />
          <div
            style={
              errorEmail ? { visibility: "visible" } : { visibility: "hidden" }
            }
            className="errorLabel"
          >
            {errorEmail || "this is a gapfiller error"}
          </div>
        </div>

        <div className="inputContainer">
          <input
            value={password}
            type="password"
            autoComplete="current-password"
            placeholder="Enter your password here"
            onChange={(e) => setPassword(e.target.value)}
            className="inputBox"
          />
          <div
            style={
              errorPassword
                ? { visibility: "visible" }
                : { visibility: "hidden" }
            }
            className="errorLabel"
          >
            {errorPassword || "this is a gapfiller error"}
          </div>
        </div>

        <div className="inputContainer">
          <input
            value={repeatPassword}
            type="password"
            placeholder="Repeat your password"
            onChange={(e) => setRepeatPassword(e.target.value)}
            className="inputBox"
          />
          <div
            style={
              errorRepeatPassword
                ? { visibility: "visible" }
                : { visibility: "hidden" }
            }
            className="errorLabel"
          >
            {errorRepeatPassword || "this is a gapfiller error"}
          </div>
        </div>

        <div className="goLogin">
          <p className="goLoginPara">Already have an account?</p>
          <Link to={"/login"} className="goLoginLink">
            Log in here
          </Link>
        </div>

        <div className="submitContainer">
          <button className="submitButton" type="submit" value="Submit">
            Submit
          </button>
        </div>
      </form>
    </>
  );
}

export default Register;
