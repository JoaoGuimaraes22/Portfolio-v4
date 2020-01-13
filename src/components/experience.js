import React from "react";
import "../css/main.css";
import unipartner from "../img/unipartner.png";
import code from "../img/code.jpeg";
import uni from "../img/uni.PNG";

const Experience = () => {
  return (
    <div className="experience" id="experience">
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
          <img src={code} alt="Time-As-Dev" className="time-img" />
        </div>
        <div className="exp-uni">
          <img src={uni} alt="Unipartner-Logo" className="uni-img" />
          <div className="uni-text text">
            <h2 className="title uni-title">
              At <span className="bluer">Unipartner IT Services</span>
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
