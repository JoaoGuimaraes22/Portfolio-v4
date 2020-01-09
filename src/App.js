import React, { useEffect, useState } from "react";
import "./css/main.css";
import Loading from "./components/loading";
import Navbar from "./components/navbar";
import Landing from "./components/landing";

const App = () => {
  const [loaderStyle, setLoaderStyle] = useState({ display: "block" });
  const [appStyle, setAppStyle] = useState({ display: "none" });

  useEffect(() => {
    setTimeout(() => {
      setLoaderStyle({ display: "none" });
      setAppStyle({ display: "block" });
    }, 1500);
  }, []);

  return (
    <div className="app">
      <div className="init-loader" style={loaderStyle}>
        <Loading />
      </div>
      <div className="main-app" style={appStyle}>
        <Navbar />
        <Landing />
      </div>
    </div>
  );
};

export default App;
