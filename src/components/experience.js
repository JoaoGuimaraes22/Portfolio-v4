import React, { useState, useEffect } from "react";
import "../css/main.css";
import code from "../img/code.jpeg";
import uni from "../img/uni.PNG";

const Experience = () => {
  const [animate, setAnimate] = useState({ visibility: "hidden" });

  const myScrollFunc = () => {
    window.addEventListener("scroll", () => {
      let y = window.scrollY;
      if (y >= 3600) {
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
    <div className="experience" id="experience" style={animate}>
      <div className="exp-title">
        <h4 className="exp-title-text">
          <span className="exp-num">04. </span>What I've done
        </h4>
        <div className="line"></div>
      </div>
      <div className="exp-main">
        <div className="exp-time exp-container">
          <div className="text time-text">
            <h2 className="title time-title">
              Being a <span className="bluer">developer</span>
            </h2>
            <p className="desc time-desc">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam
              officiis autem aliquid doloribus ab adipisci deleniti sed
              incidunt! Sapiente, aspernatur.
            </p>
          </div>
          <a href="#about">
            <img src={code} alt="Time-As-Dev" className="time-img" />
          </a>
        </div>
        <div className="exp-uni">
          <a href="https://www.unipartner.com/" target="blank">
            <img src={uni} alt="Unipartner-Logo" className="uni-img" />
          </a>
          <div className="uni-text text">
            <h2 className="title uni-title">
              <span className="bluer">@</span> Unipartner IT Services
            </h2>
            <p className="desc uni-desc">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis
              impedit quos, maxime harum debitis sit eum asperiores! Officiis,
              unde tempore?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
