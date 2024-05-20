import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Register.css";
import toast from "react-hot-toast";

function Register() {
  const [id, setId] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const [errorId, setErrorId] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [errorRepeatPassword, setErrorRepeatPassword] = useState("");

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    // console.log("submitetd");
    // console.log(e.target);
    let formObj = { id, email, password };
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
    setErrorId();
    setErrorEmail();
    setErrorPassword();
    setErrorRepeatPassword();

    if (id === null || id === "") {
      isproceed = false;
      setErrorId("please enter your username.");
    } else if (!/^[A-Za-z][A-Za-z0-9_'\s?]{2,30}$/.test(id)) {
      isproceed = false;
      setErrorId("username must be between 3 to 30 letters.");
    } else if (email === null || email === "") {
      isproceed = false;

      setErrorEmail("please enter your email.");
    } else if (!/^[a-zA-Z0-9.]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)) {
      isproceed = false;
      setErrorEmail("please enter valid email");
    } else if (password === null || password === "") {
      isproceed = false;

      setErrorPassword("please enter your password.");
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

        <div className="inputContainer">
          <input
            value={id}
            autoComplete="name"
            placeholder="Enter your username here"
            onChange={(e) => setId(e.target.value)}
            className="inputBox"
          />
          <div
            style={
              errorId ? { visibility: "visible" } : { visibility: "hidden" }
            }
            className="errorLabel"
          >
            {errorId || "this is a gapfiller error"}
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
            onBlur={IsValidate}
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
