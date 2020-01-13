import React from "react";
import "../css/main.css";

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
        <div className="exp-time">
          <div className="text time-text">
            <h2 className="title time-title">My time as a developer</h2>
            <p className="desc time-desc">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam
              officiis autem aliquid doloribus ab adipisci deleniti sed
              incidunt! Sapiente, aspernatur.
            </p>
          </div>
          <img src="" alt="Time as a dev image" className="time-img" />
        </div>
        <div className="exp-uni">
          <img src="" alt="Unipartner Image" className="uni-img" />
          <div className="uni-text">
            <h2 className="title uni-title">At Unipartner IT Services</h2>
            <p className="desc uni-desc">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis
              impedit quos, maxime harum debitis sit eum asperiores! Officiis,
              unde tempore?
            </p>
          </div>
        </div>
        <div className="exp-unipartner"></div>
      </div>
    </div>
  );
};

export default Experience;
