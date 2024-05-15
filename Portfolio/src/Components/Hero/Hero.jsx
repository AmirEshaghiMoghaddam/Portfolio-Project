import React from "react";
import "./Hero.css";
import profile_img from "../../assets/profile_img.svg";

function Hero() {
  return (
    <div className="hero">
      <img src={profile_img} alt="" />
      <h1>
        <span>I'm Amir Es'haghi,</span> frontend developer based in Norway
      </h1>
      <p>
        I am a front end developer from Oslo, Norway with 2 years of experience
        in modern technologies like JavaScript, TypeScript and ReactJS.
      </p>
      <div className="hero-action">
        <button className="hero-connect">Connect with me</button>
        <button className="hero-CV">My resume</button>
      </div>
    </div>
  );
}

export default Hero;
