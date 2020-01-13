import React, { useState, useEffect } from "react";
import "../css/main.css";
import Me from "../img/Me.jpg";

const About = () => {
  const [animate, setAnimate] = useState({ visibility: "hidden" });

  const myScrollFunc = () => {
    window.addEventListener("scroll", () => {
      let y = window.scrollY;
      if (y >= 300) {
        setAnimate({
          visibility: "visible",
          animation: "appear 1s",
          animationFillMode: "forwards"
        });
      }
    });
  };

  useEffect(() => {
    myScrollFunc();
  }, []);

  return (
    <div className="about" style={animate}>
      <div className="ab-title" id="about">
        <h4 className="ab-title-text">
          <span className="ab-num">01. </span>About Me
        </h4>
        <div className="line"></div>
      </div>
      <div className="about-main">
        <div className="main-text">
          <p className="desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
            dicta fuga nemo distinctio eaque libero corrupti ea perspiciatis
            culpa eius. Lorem ipsum dolor sit, amet consectetur adipisicing
            elit. Accusantium, Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Ea, illum
          </p>
          <p className="desc-2">
            officiis? A in nemo corrupti! Ipsam adipisci esse nihil facere?
            similique? Lorem ipsum dolor sit amet consectetur adipisicing elit.
            In, corporis. Lorem ipsum dolor sit, amet consectetur adipisicing
          </p>
        </div>
        <img className="img" alt="Me" src={Me} />
      </div>
    </div>
  );
};

export default About;
