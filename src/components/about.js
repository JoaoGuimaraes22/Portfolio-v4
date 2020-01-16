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

  const getAge = () => {
    const date = new Date();
    const currYear = date.getFullYear();
    const myAge = currYear - 2001;
    return myAge.toString();
  };

  useEffect(() => {
    myScrollFunc();
  }, []);

  return (
    <div className="about" style={animate} id="about">
      <div className="ab-title">
        <h4 className="ab-title-text">
          <span className="ab-num">01. </span>About Me
        </h4>
        <div className="line"></div>
      </div>
      <div className="about-main">
        <div className="main-text">
          <p className="desc">
            Hello! I'm João Guimarães, I'm a {getAge()} years old software
            developer who enjoys building things that live on the web.
            <br />
          </p>
          <p className="desc-2">
            My focus is on the development of modern and efficient websites, web
            apps or services to provide users or companies with fully
            responsive, pixel-perfect interfaces and exceptional, usefull
            interaction.
          </p>
        </div>
        <a href="https://github.com/JoaoGuimaraes22" target="blank">
          <img className="img" alt="Me" src={Me} />
        </a>
      </div>
    </div>
  );
};

export default About;
