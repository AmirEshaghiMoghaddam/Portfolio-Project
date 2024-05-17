import React, { useState } from "react";
import "./Navbar.css";
import CV from "../../assets/CV.png";
import AnchorLink from "react-anchor-link-smooth-scroll";

function Navbar() {
  const [menu, setMenu] = useState(null);

  function handleClick(val) {}

  return (
    <div className="navbar">
      <img src={CV} alt="" />
      <ul className="nav-menu">
        <li>
          <AnchorLink className="anchor-link" href="#home">
            <p
              onClick={() => setMenu("home")}
              className={menu === "home" ? "highlight" : null}
            >
              Home
            </p>
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={40} href="#about">
            <p
              onClick={() => setMenu("about me")}
              className={menu === "about me" ? "highlight" : null}
            >
              About Me
            </p>
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={40} href="#services">
            <p
              onClick={() => setMenu("services")}
              className={menu === "services" ? "highlight" : null}
            >
              Services
            </p>
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={40} href="#work">
            <p
              onClick={() => setMenu("portfolio")}
              className={menu === "portfolio" ? "highlight" : null}
            >
              Portfolio
            </p>
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={40} href="#contact">
            <p
              onClick={() => setMenu("contact")}
              className={menu === "contact" ? "highlight" : null}
            >
              Contact
            </p>
          </AnchorLink>
        </li>
      </ul>
      <div className="nav-connect">
        <AnchorLink className="anchor-link" offset={40} href="#contact">
          Connect With Me
        </AnchorLink>
      </div>
    </div>
  );
}

export default Navbar;
