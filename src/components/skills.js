import React from "react";
import "../css/main.css";

const Skills = () => {
  return (
    <div className="skills" id="skills">
      <div className="skills-text">
        <div className="line-one"></div>
        <h1 className="skills-title">
          <span className="skills-num">02. </span>My skills
        </h1>
        <div className="line"></div>
      </div>
      <div className="desc">
        <p className="skills-desc">
          Improving myself has always been a{" "}
          <span className="bluer">passion</span> of mine, and learning how to
          use different technologies{" "}
          <span className="bluer">professionally</span> has been a big part of
          that facet of my life.
        </p>
        <p className="skills-desc-2">
          Here are some of the <span className="bluer">technologies</span> I
          know:
        </p>
      </div>

      <div className="tech-lists">
        <ul className="list list-1">
          <li className="list-item">C#, .NET</li>
          <li className="list-item">ASP.NET</li>
          <li className="list-item">SQL, MySQL</li>
          <li className="list-item">NLP</li>
          <li className="list-item">Azure, Firebase</li>
        </ul>
        <ul className="list list-2">
          <li className="list-item">JavaScript (ES6+)</li>
          <li className="list-item">React</li>
          <li className="list-item">HTML, CSS, SCSS</li>
          <li className="list-item">Text</li>
          <li className="list-item">Text</li>
        </ul>
      </div>
    </div>
  );
};

export default Skills;
