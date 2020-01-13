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
          <a href="#landing">
            <FaGithub />
          </a>
        </div>
        <div className="icon">
          <a href="#landing">
            <FaLinkedin />
          </a>
        </div>
        <div className="icon">
          <a href="#landing">
            <FaInstagram />
          </a>
        </div>
        <div className="icon">
          <a href="#landing">
            <FaCodepen />
          </a>
        </div>
        <div className="icon">
          <a href="#landing">
            <FaTwitter />
          </a>
        </div>
        <div className="icon">
          <a href="#landing">
            <FaYoutube />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
