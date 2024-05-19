import React, { useState, useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Navbar.css";
import AnchorLink from "react-anchor-link-smooth-scroll";
import menu_open from "../../assets/menu_open.svg";
import menu_close from "../../assets/menu_close.svg";

function Navbar() {
  const [menu, setMenu] = useState(null);
  const menuRef = useRef();

  const navigate = useNavigate();

  const openMenu = () => {
    console.log(menuRef);
    menuRef.current.style.right = "0";
  };

  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
  };

  return (
    <div className="navbar">
      <p className="logo">AmirEs'haghi</p>
      <img src={menu_open} onClick={openMenu} alt="" className="nav-mob-open" />
      <ul ref={menuRef} className="nav-menu">
        <img
          src={menu_close}
          onClick={closeMenu}
          alt=""
          className="nav-mob-close"
        />
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
      <div onClick={() => navigate("/register")} className="nav-connect">
        <div>Signup/ Login</div>
      </div>
    </div>
  );
}

export default Navbar;
