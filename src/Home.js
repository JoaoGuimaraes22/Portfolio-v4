import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import App from "./App";
import Archive from "./components/archive";

const Home = () => {
  return (
    <div id="home">
      <Router>
        <div className="home">
          <Switch>
            <Route exact path="/archive">
              <Archive />
            </Route>
            <Route path="/">
              <App />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default Home;
