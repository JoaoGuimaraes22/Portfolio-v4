import React from "react";
import "../css/main.css";
import { FaGithub, FaLinkedin, FaInstagram, FaCodepen, FaTwitter, FaYoutube } from "react-icons/fa"

const Socials = () => {
    return(
        <div className="socials" id="socials">
            <FaGithub className="icon"/>
            <FaLinkedin className="icon"/>
            <FaInstagram className="icon"/>
            <FaCodepen className="icon"/>
            <FaTwitter className="icon"/>
            <FaYoutube className="icon"/>
            <div className="line"></div>
        </div>
    )
}

export default Socials;