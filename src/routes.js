import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./screens/home";
import Profile from "./screens/profile";
import NotFoundPage from "./screens/NotFoundPage";

export default (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/profile/:ID" component={Profile} />
    <Route path="*" component={NotFoundPage} />
  </Switch>
);
