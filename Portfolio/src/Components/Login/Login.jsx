import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import "./Login.css";

function Login() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const [errorId, setErrorId] = useState("");
  const [errorPassword, setErrorPassword] = useState("");

  const passwordInput = useRef();

  const navigate = useNavigate();

  useEffect(() => {
    sessionStorage.clear();
  }, []);

  function loginSubmit(e) {
    e.preventDefault();
    // console.log(e.target);
    setErrorId();
    setErrorPassword();
    let formObj = { id, password };
    // console.log(formObj);
    if (isValidate()) {
      fetch(`http://localhost:8000/user/${id}`)
        .then((res) => {
          if (!res.ok) {
            throw new Error(res.status + " Error");
          }
          return res.json();
        })
        .then((data) => {
          // console.log(data);
          if (Object.keys(data).length === 0) {
            toast.error("please enter valid username");
          } else if (data.password === password) {
            toast.success("You are signed in", { duration: 5000 });
            sessionStorage.setItem("username", id);
            navigate("/");
          } else {
            setPassword("");
            toast.error("please enter valid password");
            passwordInput.current.focus();
          }
        })
        .catch((err) => {
          toast.error("Login failed due to this error :" + err.message);
        });
    }
  }
  function isValidate() {
    let result = true;
    if (id === null || id === "") {
      result = false;
      setErrorId("please enter your id.");
    } else if (password === null || password === "") {
      result = false;
      setErrorPassword("please enter your password.");
    }
    return result;
  }

  return (
    <form onSubmit={loginSubmit} className="loginContainer">
      <div className="titleContainer">
        <div>LogIn</div>
      </div>

      <div className="inputContainer">
        <input
          value={id}
          autoComplete="email"
          placeholder="Enter your username here"
          onChange={(e) => setId(e.target.value)}
          className="inputBox"
        />
        <div
          style={errorId ? { visibility: "visible" } : { visibility: "hidden" }}
          className="errorLabel"
        >
          {errorId || "this is a gapfiller error"}
        </div>
      </div>

      <div className="inputContainer">
        <input
          value={password}
          type="password"
          ref={passwordInput}
          autoComplete="current-password"
          placeholder="Enter your password here"
          onChange={(e) => setPassword(e.target.value)}
          className="inputBox"
        />
        <div
          style={
            errorPassword ? { visibility: "visible" } : { visibility: "hidden" }
          }
          className="errorLabel"
        >
          {errorPassword || "this is a gapfiller error"}
        </div>
      </div>

      <div className="goSignup">
        <p className="goSignupPara">Don't have an account?</p>
        <Link to={"/register"} className="goSignupLink">
          Sign up here
        </Link>
      </div>

      <div className="submitContainer">
        <button className="submitButton" type="submit" value="Log in">
          Log in
        </button>
      </div>
    </form>
  );
}

export default Login;
