import React from "react";
import "../css/main.css";
import { FaGithub, FaLinkedin, FaInstagram, FaCodepen, FaTwitter, FaYoutube } from "react-icons/fa"

const Socials = () => {
    return(
        <div className="socials" id="socials">
            <a href="#landing"><FaGithub className="icon"/></a>
            <a href="#landing"><FaLinkedin className="icon"/></a>
            <a href="#landing"><FaInstagram className="icon"/></a>
            <a href="#landing"><FaCodepen className="icon"/></a>
            <a href="#landing"><FaTwitter className="icon"/></a>
            <a href="#landing"><FaYoutube className="icon"/></a>
            <div className="line"></div>
        </div>
    )
}

export default Socials;