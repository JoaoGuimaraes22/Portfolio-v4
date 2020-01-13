import React, { useState, useEffect } from "react";
import "../css/main.css";

const Contacts = () => {
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
    <div className="fixed-contacts" id="fixed-contacts" style={animate}>
      <div className="c-text">
        <a href="#contact">
          <h6 className="fixed-contact-me">
            Contact me! - sebastiao.guimaraes@gmail.com
          </h6>
        </a>
      </div>
      <div className="line"></div>
    </div>
  );
};

export default Contacts;
