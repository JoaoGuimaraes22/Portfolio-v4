import React from "react";
import "../css/main.css";

const Landing = () => {
  return (
    <main className="landing">
      <h6 className="hey">Hey, my name is</h6>
      <h1 className="name">João Guimarães.</h1>
      <h2 className="hard">If it's hard, just call me John.</h2>
      <h1 className="intro">I build things for the web!</h1>
      <p className="desc">
        I'm a full stack engineer born in Lisbon, Portugal, specializing in
        building and mantaining high-quality, responsive apps or websites. I
        love to learn and like to excel at all things tech.
      </p>
      <button className="find-more">Find more!</button>
    </main>
  );
};

export default Landing;
