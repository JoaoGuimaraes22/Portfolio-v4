import React, { useState, useEffect } from "react";
import "../css/main.css";
import { FaGithub } from "react-icons/fa";

const Archive = () => {
  const [git, setGit] = useState([]);
  const [navPos, setNavPos] = useState({ top: "0" });

  useEffect(() => {
    var prevScrollpos = window.pageYOffset;
    window.onscroll = function() {
      var currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        setNavPos({ top: "0" });
      } else {
        setNavPos({ animation: "gone 0.3s", animationFillMode: "forwards" });
      }
      prevScrollpos = currentScrollPos;
    };
  }, []);

  const getGit = async () => {
    const API_URL = "https://api.github.com/users/JoaoGuimaraes22/repos";
    const response = await fetch(API_URL);
    const data = await response.json();

    const sortFunction = (a, b) => {
      var dateA = new Date(a.created_at).getTime();
      var dateB = new Date(b.created_at).getTime();
      return dateA < dateB ? 1 : -1;
    };

    const sorting = data.sort(sortFunction);

    console.log(data);

    setGit(sorting);
  };

  const changeTitle = () => {
    document.title = "Archive | JG";
  };

  useEffect(() => {
    changeTitle();
    getGit();
  }, []);

  return (
    <div className="archive" id="archive">
      <nav className="notnav" id="navbar" style={navPos}>
        <h2
          className="logo"
          onClick={() => {
            window.location = "/";
          }}
        >
          <span className="logo-minus">&#60;</span>
          <span className="logo-main">JG</span>
          <span className="logo-greater">/&#62;</span>
        </h2>
      </nav>
      <div className="main">
        <header className="archive-logo">
          <h1 className="archive-title">Archive</h1>

          <p className="repo-count">
            Currently I have <span className="bluer">{git.length} </span>
            repositories.
            <br />
            (data fetched using the Github API).
          </p>

          <p className="other-proj">
            Here is a big list of the stuff I've done:
          </p>
        </header>
        <div className="repos">
          {git.map((e) => {
            return (
              <div key={e.id} className="repo">
                <div className="part-1">
                  {" "}
                  <div className="name">
                    <p className="bluer">Name:</p>
                    <h1 className="repo-name">{e.name}</h1>
                  </div>
                  <div className="date">
                    <p className="bluer">Created at:</p>
                    <p className="repo-date">{e.created_at.substring(0, 10)}</p>
                  </div>
                </div>
                <div className="part-2">
                  <div className="desc">
                    <div className="bluer">Description:</div>
                    <p className="repo-desc">{e.description}</p>
                  </div>
                  <div className="most-used">
                    <p className="bluer">Most used language:</p>
                    <p className="repo-lang">{e.language}</p>
                  </div>
                </div>
                <a href={e.html_url} target="blank" className="repo-url">
                  <FaGithub />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Archive;
