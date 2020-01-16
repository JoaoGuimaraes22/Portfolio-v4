import React, { useState, useEffect } from "react";
import "../css/main.css";
import code from "../img/code.jpeg";
import uni from "../img/uni.PNG";

const Experience = () => {
  const [animate, setAnimate] = useState({ visibility: "hidden" });

  const myScrollFunc = () => {
    window.addEventListener("scroll", () => {
      let y = window.scrollY;
      if (y >= 3500) {
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
              Throughout the years, I've completed a lof of fun projects. <br />{" "}
              <br />
              My favorites where making virtual assistant bots using NLP and
              different databases using Cortana, Azure, C# and Node.js, making
              Augmented Reality mobile applications with Unity and C#, <br />
              participating and ranking high in programming competitions <br />{" "}
              and building and deploying full-stack websites (with the MERN
              stack).
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
              During my time at Unipartner, I worked as full-stack developer,
              mainly using the Microsoft Stack (C#, ASP.NET, Azure, Office 365
              and Dynamics) and React.
              <br />
              <br />
              What I did:
              <ul className="desc-ul">
                <li> Developed server-side programs for Banking Services.</li>
                <li>
                  {" "}
                  Created a virtual assistant bot that helped handle interaction
                  with non-portuguese emigrants seeking help from a financial
                  services company.
                </li>
                <li>
                  {" "}
                  Participated in creating a React front-end for a Banking
                  Service.
                </li>
              </ul>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
