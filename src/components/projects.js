import React from "react";
import "../css/main.css";

const Projects = () => {
  return (
    <div className="projects" id="projects">
      <div className="projects-text">
        <div className="line-1"></div>
        <h1 className="projects-title">
          <span className="projects-num">03. </span>Projects
        </h1>
        <div className="line"></div>
      </div>
      <div className="projects-container">
        <div className="project-1">
          <div className="project-container"></div>
          <div className="project-text">
            <p className="featured">Featured Project</p>
            <h3 className="project-name">Project Name</h3>
          </div>
          <div className="project-description">
            <p className="project-desc-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
              saepe praesentium architecto consequuntur quis aliquid. Temporibus
              quam sequi corporis veniam vitae voluptatem neque nulla voluptates
              illum.
            </p>
          </div>
        </div>
        <ul className="project-techs">
          <li className="tech-name"></li>
          <li className="tech-name"></li>
          <li className="tech-name"></li>
          <li className="tech-name"></li>
        </ul>
        <div className="project-2"></div>
        <div className="project-3"></div>
      </div>
    </div>
  );
};

export default Projects;
