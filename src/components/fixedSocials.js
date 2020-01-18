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
      <a
        href="https://www.linkedin.com/in/jo%C3%A3o-guimar%C3%A3es-4abaa7197/"
        target="blank"
      >
        <FaLinkedin className="icon" />
      </a>
      <a href="https://www.instagram.com/sebasguimas/" target="blank">
        <FaInstagram className="icon" />
      </a>
      <a href="https://codepen.io/joaoguimaraes22" target="blank">
        <FaCodepen className="icon" />
      </a>
      <a href="https://twitter.com/sebasguimas" target="blank">
        <FaTwitter className="icon" />
      </a>
      <a href="https://www.youtube.com/" target="blank">
        <FaYoutube className="icon" />
      </a>

      <div className="line"></div>
    </div>
  );
};

export default Socials;
