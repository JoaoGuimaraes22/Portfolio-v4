import React from "react";
import "../css/main.css";

const Loading = () => {
  return (
    <div className="loading">
      <h2 className="logo">
        <span className="logo-minus">&#60;</span>
        <span className="logo-main">JSSG</span>
        <span className="logo-greater">/&#62;</span>
      </h2>
    </div>
  );
};

export default Loading;
