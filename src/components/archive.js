import React, { useState, useEffect, useCallback } from "react";
import "../css/main.css";
import Navbar from "./navbar";

const Archive = () => {
  const [git, setGit] = useState([]);

  useEffect(() => {
    const getGit = async () => {
      const API_URL = "https://api.github.com/users/JoaoGuimaraes22/repos";
      const response = await fetch(API_URL);

      const data = await response.json();
      let newData = [];

      const repoNames = await data.map((e) => {
        return e.name;
      });

      await repoNames.forEach(async (e) => {
        const topicsGet = await fetch(
          `https://api.github.com/repos/JoaoGuimaraes22/${e}/topics`,
          {
            method: "GET",
            headers: new Headers({
              Accept: "application/vnd.github.mercy-preview+json",
              Authorization: "token 42ec1a575fad2318cd088710726435c353bb8b6c"
            })
          }
        );

        const res = await topicsGet.json();
        const topics = await res.names;

        const checkIfNone = () => {
          if (topics.length === 0) {
            return false;
          } else {
            return true;
          }
        };

        const stringify = () => {
          let stringer = "";
          if (!checkIfNone()) {
            return " ";
          } else {
            for (let o = 0; o < topics.length; o++) {
              stringer += topics[o] + " ";
            }
          }
          return stringer;
        };

        await stringify();

        const getAssociatedName = () => {
          for (let r = 0; r < data.length; r++) {
            if (data[r].name === e) {
              return data[r];
            }
          }
        };

        const corrObj = await getAssociatedName();
        corrObj["topics"] = await stringify();

        await newData.push(corrObj);
      });
      await setGit(newData);
    };

    getGit();
  }, []);

  const fakeObj = [{ name: "Sebas", desc: "pretty cool guy" }];

  return (
    <div className="archive" id="archive">
      <Navbar />
      <header className="archive-logo">
        <h3 className="archive-title">Archive</h3>
        <p className="other-proj">Here is big list of the stuff I've done</p>
      </header>

      <div className="repos">{}</div>
    </div>
  );
};

export default Archive;
