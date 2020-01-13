import React, { useEffect, useState } from "react";
import "../css/main.css";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaCodepen,
  FaTwitter,
  FaYoutube
} from "react-icons/fa";

const Socials = () => {
  const [animate, setAnimate] = useState({ display: "none" });

  useEffect(() => {
    setTimeout(() => {
      setAnimate({
        display: "flex",
        animation: "appear 0.7s",
        animationFillMode: "forwards"
      });
    }, 1000);
  });
  return (
    <div className="socials" id="socials" style={animate}>
      <a href="https://github.com/JoaoGuimaraes22" target="blank">
        <FaGithub className="icon" />
      </a>
      <a href="#landing">
        <FaLinkedin className="icon" />
      </a>
      <a href="#landing">
        <FaInstagram className="icon" />
      </a>
      <a href="#landing">
        <FaCodepen className="icon" />
      </a>
      <a href="#landing">
        <FaTwitter className="icon" />
      </a>
      <a href="#landing">
        <FaYoutube className="icon" />
      </a>
      <div className="line"></div>
    </div>
  );
};

export default Socials;
