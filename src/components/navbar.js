import React, { useEffect, useState } from "react";
import "../css/main.css";

const Navbar = () => {
  const [navPos, setNavPos] = useState({ top: "0" });

  useEffect(() => {
    var prevScrollpos = window.pageYOffset;
    window.onscroll = function() {
      var currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        setNavPos({ top: "0" });
      } else {
        setNavPos({ animation: "gone 0.3s", animationFillMode: "forwards" });
      }
      prevScrollpos = currentScrollPos;
    };
  }, []);

  return (
    <nav className="navbar" id="navbar" style={navPos}>
      <h2
        className="logo"
        onClick={() => {
          window.location.reload();
        }}
      >
        <span className="logo-minus">&#60;</span>
        <span className="logo-main">JSSG</span>
        <span className="logo-greater">/&#62;</span>
      </h2>
      <ul className="nav-list">
        <li className="nav-list-item">
          <a href="#about">
            <span className="nav-links-num">01. </span>About
          </a>
        </li>
        <li className="nav-list-item">
          <a href="#skills">
            <span className="nav-links-num">02. </span>Skills
          </a>
        </li>
        <li className="nav-list-item">
          <a href="#projects">
            <span className="nav-links-num">03. </span>Projects
          </a>
        </li>
        <li className="nav-list-item">
          <a href="#experience">
            <span className="nav-links-num">04. </span>Experience
          </a>
        </li>
        <li className="nav-list-item">
          <a href="#contact">
            <span className="nav-links-num">05. </span>Contact
          </a>
        </li>
      </ul>
      <button className="resume">Resume</button>
    </nav>
  );
};

export default Navbar;
