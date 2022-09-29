import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Login from "./Login";
import NavBar from "./NavBar";

import Toggle from "./Toggle";

function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/about">
          {<About />}
        </Route>

        <Route exact path="/login">
          {<Login />}{" "}
        </Route>

        <Route exact path="/">
          {<Home />}{" "}
        </Route>
        <Route exact path="/toggle">
          {<Toggle />}
        </Route>
      </Switch>
    </div>
  );
}

export default App;
