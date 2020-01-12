import React from "react";
import "../css/main.css";
import Me from "../img/Me.jpg";

const About = () => {
  return (
    <div className="about" id="about">
      <div className="ab-title">
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
