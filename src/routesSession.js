import React from "react";
import { Route, Switch } from "react-router-dom";

import App from "./App";
import Profile from './components/dash/components/profile/Profile';
import Wall from './components/dash/components/wall/Wall';

const AppRoutes = () => (
  <App>
    <Switch>
      <Route exact path="/profile" component={Profile} />
      <Route exact path="/wall" component={Wall} />
    </Switch>
  </App>
);

export default AppRoutes;
