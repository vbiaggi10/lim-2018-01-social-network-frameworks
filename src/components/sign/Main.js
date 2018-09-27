import React, { Component } from "react";
// import PropTypes from 'prop-types';

import Home from "./components/Home";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";

// import items from '../../data/menu'

class Main extends Component {
  render() {
    return (
      <div className=" content-bg">
        <SignIn />
        <div className="container">
          <div className="row">
            <Home />
            <SignUp />
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
