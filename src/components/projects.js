import React from "react";
import "../css/main.css";

const Projects = () => {
  return (
    <div className="projects" id="projects">
      <div className="projects-text">
        <h1 className="projects-title">
          <span className="projects-num">03. </span>Some Of My Projects
        </h1>
        <div className="line"></div>
      </div>
      <div className="projects-container">
        <div className="project-1"></div>
        <div className="project-2"></div>
        <div className="project-3"></div>
      </div>
    </div>
  );
};

export default Projects;
