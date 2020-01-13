import React from "react";
import "../css/main.css";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaCodepen,
  FaTwitter,
  FaYoutube
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <div className="copyright">Made by João Guimaraes &copy; 2020 </div>
      <div className="icons">
        <div className="icon">
          <a href="https://github.com/JoaoGuimaraes22" target="blank">
            <FaGithub />
          </a>
        </div>
        <div className="icon">
          <a
            href="https://www.linkedin.com/in/jo%C3%A3o-guimar%C3%A3es-4abaa7197/"
            target="blank"
          >
            <FaLinkedin />
          </a>
        </div>
        <div className="icon">
          <a href="https://www.instagram.com/sebasguimas/" target="blank">
            <FaInstagram />
          </a>
        </div>
        <div className="icon">
          <a href="https://codepen.io/joaoguimaraes22" target="blank">
            <FaCodepen />
          </a>
        </div>
        <div className="icon">
          <a href="https://twitter.com/sebasguimas" target="blank">
            <FaTwitter />
          </a>
        </div>
        <div className="icon">
          <a href="https://www.youtube.com/" target="blank">
            <FaYoutube />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
