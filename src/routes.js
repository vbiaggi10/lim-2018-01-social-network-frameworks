import React from "react";
import { Route, Switch } from "react-router-dom";

import App from "./App";
// import Sign from "./components/sign/components/Home";
// import SignUp from "./components/sign/components/SignUp";
// import SignIn from "./components/sign/components/SignIn";
import Profile from './components/dash/components/profile/Profile';
import Wall from './components/dash/components/wall/Wall';
import Page404 from "./components/page404/Page404";

const AppRoutes = () => (
  <App>
    <Switch>
      {/* <Route exact path="/signin" component={SignIn} /> */}
      {/* <Route exact path="/signup" component={SignUp} /> */}
      <Route exact path="/profile" component={Profile} />
      {/* <Route exact path="/wall" component={Wall} /> */}
      <Route exact path="/" component={Wall} />
      <Route component={Page404} />
    </Switch>
  </App>
);

export default AppRoutes;
