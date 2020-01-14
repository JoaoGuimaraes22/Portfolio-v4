import React, { useState, useEffect } from "react";
import "../css/main.css";
import project from "../img/project.png";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
  const [animate, setAnimate] = useState({ visibility: "hidden" });
  const [animate1, setAnimate1] = useState({ visibility: "hidden" });
  const [animate2, setAnimate2] = useState({ visibility: "hidden" });
  const [animate3, setAnimate3] = useState({ visibility: "hidden" });
  const [animate4, setAnimate4] = useState({ visibility: "hidden" });

  const myScrollFunc = () => {
    window.addEventListener("scroll", () => {
      let y = window.scrollY;
      if (y >= 1500) {
        setAnimate({
          visibility: "visible",
          animation: "appear 1.6s",
          animationFillMode: "forwards"
        });
      }
      if (y >= 1750) {
        setAnimate1({
          visibility: "visible",
          animation: "appear 1.3s",
          animationFillMode: "forwards"
        });
      }
      if (y >= 2100) {
        setAnimate2({
          visibility: "visible",
          animation: "appear 1.3s",
          animationFillMode: "forwards"
        });
      }
      if (y >= 2350) {
        setAnimate3({
          visibility: "visible",
          animation: "appear 1.3s",
          animationFillMode: "forwards"
        });
      }
      if (y >= 2650) {
        setAnimate4({
          visibility: "visible",
          animation: "appear 1.3s",
          animationFillMode: "forwards"
        });
      }
    });
  };

  useEffect(() => {
    myScrollFunc();
  }, []);

  return (
    <div className="projects" id="projects" style={animate}>
      <div className="projects-text">
        <div className="line-1"></div>
        <h1 className="projects-title">
          <span className="projects-num">03. </span>Projects
        </h1>
        <div className="line"></div>
      </div>
      <div className="projects-container">
        <div className="project-1" style={animate1}>
          <div className="project-main-part">
            <div className="project-text">
              <div className="text-main-text">
                <p className="featured">Featured Project</p>
                <h3 className="project-name">Project Name</h3>
              </div>
              <div className="icons">
                <FaGithub className="icon" />
                <FaExternalLinkAlt className="icon" />
              </div>
            </div>
            <div className="project-description">
              <p className="project-desc-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
                saepe praesentium architecto consequuntur quis aliquid.
                Temporibus quam sequi corporis veniam vitae voluptatem neque
              </p>
            </div>
            <ul className="project-techs">
              <li className="tech-name">C#</li>
              <li className="tech-name">Javascript</li>
              <li className="tech-name">SASS</li>
            </ul>
          </div>

          <div className="project-img-part">
            <img
              className="project-container"
              src={project}
              alt="project"
            ></img>
            <div className="overlay">
              <div className="ov-text">See project!</div>
            </div>
          </div>
        </div>

        <div className="project-2" style={animate2}>
          <div className="project-img-part">
            <img
              className="project-container"
              src={project}
              alt="project"
            ></img>
            <div className="overlay">
              <div className="ov-text">See project!</div>
            </div>
          </div>
          <div className="project-main-part">
            <div className="project-text">
              <div className="text-main-text">
                <p className="featured">Featured Project</p>
                <h3 className="project-name">Project Name</h3>
              </div>
              <div className="icons">
                <FaGithub className="icon" />
                <FaExternalLinkAlt className="icon" />
              </div>
            </div>
            <div className="project-description">
              <p className="project-desc-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
                saepe praesentium architecto consequuntur quis aliquid.
                Temporibus quam sequi corporis veniam vitae voluptatem neque
              </p>
            </div>
            <ul className="project-techs">
              <li className="tech-name">C#</li>
              <li className="tech-name">Javascript</li>
              <li className="tech-name">SASS</li>
            </ul>
          </div>
        </div>

        <div className="project-1" style={animate3}>
          <div className="project-main-part">
            <div className="project-text">
              <div className="text-main-text">
                <p className="featured">Featured Project</p>
                <h3 className="project-name">Project Name</h3>
              </div>
              <div className="icons">
                <FaGithub className="icon" />
                <FaExternalLinkAlt className="icon" />
              </div>
            </div>
            <div className="project-description">
              <p className="project-desc-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
                saepe praesentium architecto consequuntur quis aliquid.
                Temporibus quam sequi corporis veniam vitae voluptatem neque
              </p>
            </div>
            <ul className="project-techs">
              <li className="tech-name">C#</li>
              <li className="tech-name">Javascript</li>
              <li className="tech-name">SASS</li>
            </ul>
          </div>

          <div className="project-img-part">
            <img
              className="project-container"
              src={project}
              alt="project"
            ></img>
            <div className="overlay">
              <div className="ov-text">See project!</div>
            </div>
          </div>
        </div>

        <div className="project-2" style={animate4}>
          <div className="project-img-part">
            <img
              className="project-container"
              src={project}
              alt="project"
            ></img>
            <div className="overlay">
              <div className="ov-text">See project!</div>
            </div>
          </div>
          <div className="project-main-part">
            <div className="project-text">
              <div className="text-main-text">
                <p className="featured">Featured Project</p>
                <h3 className="project-name">Project Name</h3>
              </div>
              <div className="icons">
                <FaGithub className="icon" />
                <FaExternalLinkAlt className="icon" />
              </div>
            </div>
            <div className="project-description">
              <p className="project-desc-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
                saepe praesentium architecto consequuntur quis aliquid.
                Temporibus quam sequi corporis veniam vitae voluptatem neque
              </p>
            </div>
            <ul className="project-techs">
              <li className="tech-name">C#</li>
              <li className="tech-name">Javascript</li>
              <li className="tech-name">SASS</li>
            </ul>
          </div>
        </div>
        <div className="projects-see-more">
          <button
            to="/archive"
            onClick={() => {
              window.location.href = `http://localhost:3000/archive`;
            }}
            className="see-more"
          >
            See Projects Archive
          </button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
