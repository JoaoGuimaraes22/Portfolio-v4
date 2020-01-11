import React from "react";
import "../css/main.css";

const Skills = () => {
  return (
    <div className="skills" id="skills">
      <div className="tech-lists">
        <ul className="list list-1">
          <li className="list-item">C#, .NET</li>
          <li className="list-item">ASP.NET</li>
          <li className="list-item">SQL, MySQL</li>
          <li className="list-item">NLP</li>
          <li className="list-item">Cloud Computing (Azure, Firebase)</li>
        </ul>
        <ul className="list list-2">
          <li className="list-item">JavaScript (ES6+)</li>
          <li className="list-item">React</li>
          <li className="list-item">HTML, CSS, SCSS</li>
          <li className="list-item"></li>
          <li className="list-item"></li>
        </ul>
      </div>
    </div>
  );
};

export default Skills;
