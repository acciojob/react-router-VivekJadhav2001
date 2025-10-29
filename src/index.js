import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import ReactRouter from "./components/ReactRouter";
import Home from "./components/Home";
import About from "./components/About";

ReactDOM.render(
  <BrowserRouter>
    <ReactRouter />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
