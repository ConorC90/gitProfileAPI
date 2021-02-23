import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./screens/home/index";
import Profile from "./screens/proflie/index";
import NotFoundPage from "./screens/NotFoundPage/index";

export default (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/profile/:ID" component={Profile} />
    <Route path="*" component={NotFoundPage} />
  </Switch>
);
